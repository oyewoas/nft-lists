import { renderHook, act } from "@testing-library/react-hooks";
import { DataContext } from "../provider/data-provider";
import * as alchemy from "../config/alchemy";
import useNfts, { isNftAddressValid } from "../hook/useNfts";
let mockData: alchemy.TResponse = {
  nfts: [],
  totalCount: 0,
};
jest.mock("../config/alchemy");

describe("useNfts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should validate NFT address correctly", () => {
    expect(
      isNftAddressValid("0x1234567890123456789012345678901234567890")
    ).toBe(true);
    expect(isNftAddressValid("0x12345678901234567890123456789012345678")).toBe(
      false
    );
    expect(isNftAddressValid("1234567890123456789012345678901234567890")).toBe(
      true
    );
    expect(isNftAddressValid("12345678901234567890123456789012345678")).toBe(
      false
    );
    expect(isNftAddressValid("invalid address")).toBe(false);
  });

  it("should call getNfts and dispatch SET_NFTS action with valid address", async () => {
    const mockGetNfts = jest
      .spyOn(alchemy, "getNfts")
      .mockResolvedValue(mockData);

    const dispatchMock = jest.fn();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataContext.Provider value={{ dispatch: dispatchMock, state: mockData }}>
        {children}
      </DataContext.Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useNfts(), {
      wrapper,
    });

    act(() => {
      result.current.handleAddress(
        "0x1234567890123456789012345678901234567890"
      );
    });

    expect(result.current.isValidAddress).toBe(true);
    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(mockGetNfts).toHaveBeenCalledWith(
      "0x1234567890123456789012345678901234567890"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "SET_NFTS",
      payload: mockData,
    });
    expect(result.current.isLoading).toBe(false);
  });

  it("should call handleError and dispatch SET_ERROR action if cannot find nfts for address", async () => {
    const mockData = { nfts: [], error: "" };
    const dispatchMock = jest.fn();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataContext.Provider value={{ dispatch: dispatchMock, state: mockData }}>
        {children}
      </DataContext.Provider>
    );
    const mockError = new Error("Cannot find nfts");

    // Set up mock implementation of getNfts to throw an error
    (alchemy.getNfts as jest.Mock).mockImplementationOnce(() => {
      throw mockError;
    });

    const { result } = renderHook(() => useNfts(), {
      wrapper,
    });

    act(() => {
      result.current.handleAddress(
        "0x1234567890123456789012345678901234567893"
      );
    });

    expect(result.current.isValidAddress).toBe(true);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "SET_ERROR",
      payload: {
        error: "Cannot find nfts, try again with valid address",
        nfts: [],
      },
    });
  });
  test("should return isValid address false if invalid address is provided", async () => {
    const { result } = renderHook(() => useNfts());

    act(() => {
      result.current.handleAddress("0x123456789012345678901234567890123456789");
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isValidAddress).toBe(false);
  });
  test("should return isValid address true if valid address is provided", async () => {
    const { result } = renderHook(() => useNfts());

    act(() => {
      result.current.handleAddress(
        "0x1234567890123456789012345678901234567890"
      );
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isValidAddress).toBe(true);
  });
});

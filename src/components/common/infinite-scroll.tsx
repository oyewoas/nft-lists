import { CircularProgress } from '@mui/material';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface InfiniteScrollProps<T> {
  data: T[];
  threshold?: number;
  containerComponent: React.ElementType;
  children: (item: T, index: number) => React.ReactNode;
}

const InfiniteScroll = <T, >({ data, threshold = 500, containerComponent: ContainerComponent, children }: InfiniteScrollProps<T>) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = window.document.documentElement;

    if (scrollHeight - (scrollTop + clientHeight) < threshold) {
      // Check if there is more data to load before updating the page state
      if (data.length > page * 10) {
        setPage(page + 1);
      }
    }
  
  }, [data, page, threshold]);

  useEffect(() => {
    setLoading(true);
    // simulate fetching data from an API
    setTimeout(() => {
      const newData = data.slice((page - 1) * 10, page * 10);
      setLoading(false);
      if (newData.length === 0) {
        setHasMore(false);
      }
    }, 1000);
  }, [page, data]);

  useEffect(() => {
    window.document.addEventListener('scroll', handleScroll);
    return () => {
      window.document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  const Container = ContainerComponent;

  return (
    <Container>
      {data.slice(0, page * 10).map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
      {loading && <CircularProgress />}
      {!hasMore && <></>}
    </Container>
  );
}

export default InfiniteScroll;

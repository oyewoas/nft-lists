import React from 'react'
import { Box, styled } from '@mui/material'

type Props = {
  header?: React.ReactNode
  footer?: React.ReactNode
  classes?: { content: string }
  children?: React.ReactNode
}

const PageContainer = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#070e13'
})

const PageContentContainer = styled(Box)(({ theme }) => ({
  flex: '1 0 auto',
  maxWidth: `calc(928px + 2 * ${theme.spacing(2)})`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const BaseTemplate = ({
  children,
  footer,
  header,
  classes,
}: Props) => {
  return (
    <PageContainer>
      {header}

      <PageContentContainer className={classes?.content}>
        {children}
      </PageContentContainer>

      {footer}
    </PageContainer>
  )
}
export default BaseTemplate

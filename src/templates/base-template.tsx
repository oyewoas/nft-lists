import React from 'react'
import { Box, styled } from '@mui/material'

type Props = {
  header?: React.ReactNode
  footer?: React.ReactNode
  search?: React.ReactNode
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
  display: 'grid',
  gridTemplateColumns: '1fr minmax(auto, 1200px) 1fr',
  padding: '0 5%',

}))

const BaseTemplate = ({
  children,
  footer,
  header,
  classes,
  search
}: Props) => {
  return (
    <PageContainer>
      {header}
      {search}
      <PageContentContainer className={classes?.content}>
        {children}
      </PageContentContainer>

      {footer}
    </PageContainer>
  )
}
export default BaseTemplate

import { FC } from 'react'

import { useAppSelector } from '../../store/redux-hooks/redux-hooks'

import {
  selectIsLoadingSignOut,
  selectIsLoadingUser,
} from '../../store/slices/user/user-selectors'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

const WithSpinner = <T extends JSX.IntrinsicAttributes>(
  Component: FC<T>
): FC<T> => {
  const SpinnerComponent: FC<T> = ({ ...props }) => {
    const isLoadingCheckUser = useAppSelector(selectIsLoadingUser)
    const isLoadingSignOut = useAppSelector(selectIsLoadingSignOut)

    return isLoadingCheckUser || isLoadingSignOut ? (
      <Container>
        <Row className='justify-content-center align-content-center'>
          <Col className='flex-grow-0'>
            <Spinner animation='border' />
          </Col>
        </Row>
      </Container>
    ) : (
      <Component {...props} />
    )
  }
  return SpinnerComponent
}

export default WithSpinner

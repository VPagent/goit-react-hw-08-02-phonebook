import Button from 'react-bootstrap/Button';



export const PrimaryButton = ({children, onClickBth}) => {
    return(
        <Button  onClick={onClickBth} type="button">{children}</Button>
    )
}


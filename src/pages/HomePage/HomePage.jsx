import { currentUser } from "components/redux/AuthUser/userOperations";
import Section from "components/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const HomePage = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    useEffect(()=> {
      if(!token){
        return
      }
        dispatch(currentUser())
    }, [dispatch, token])

    
  return (
    <>
    
      <Section title="Welcome to HomePage">
      <p>Please register or login</p>
      </Section>
    </>
  );
};


export default HomePage
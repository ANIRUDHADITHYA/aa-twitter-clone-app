import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const useLoginForm = (Validate) => {

    const navigate = useNavigate();

    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState("");
    const [loader, setLoader] = useState("");

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const generateError = (err) => {
        if (err) {
            setErrors(err)
        }

    }

    const handleChange = (event) => {
        setIsSubmit(false)
        setErrors("")
        const { name, value } = event.target;
        setValues((preValues) => {
            return {
                ...preValues,
                [name]: value,
            }
        })

        console.log(errors)

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validate(values));
        setIsSubmit(true);
    }

    useEffect(() => {

        const handleSignup = async () => {
            
            try {
                const { data } = await axios.post("http://localhost:3001/signin", {
                    ...values,
                }, {
                    withCredentials: true,
                });
    
                if (data) {
                    if (data.errors) {
                        generateError(data.errors)
                    } else {
                        setLoader(false)
                        navigate("/home")
                    }
                }
            } catch (error) {
                console.log(error.message)
            }


            
        }

        

        if (Object.keys(errors).length === 0 && isSubmit) {
            handleSignup();
            setLoader(true)
        }

    }, [errors, isSubmit, values])// eslint-disable-line react-hooks/exhaustive-deps





    return { handleChange, handleSubmit, values, errors, loader }
}

export default useLoginForm;
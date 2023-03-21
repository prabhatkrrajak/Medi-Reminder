import { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../assets/images/success.png";
import { Button } from '@mui/material';

const EmailVerify = () => {

    const containerStyle  = {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
    }

    const imgStyle = {
        marginTop: "5em",
        width: "10em",
    }


	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			{validUrl ? (
				<div style = {containerStyle}>
					<img src={success} alt="success_img" style = {imgStyle}/>
					<h1 className="alert-success">Email verified successfully</h1>
					<Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="success">Signin</Button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;
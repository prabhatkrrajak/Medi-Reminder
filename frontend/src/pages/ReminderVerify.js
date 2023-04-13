import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import success from "../assets/images/success.png";

const ReminderVerify = () => {

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
				const url = `http://localhost:5000/api/reminders/${param.id}/verify`;
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
					<h1 className="alert-success">Medicine Taken Successfully</h1>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default ReminderVerify;
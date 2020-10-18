import React from "react";
import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="vn-footer">
			<div className="container text-center">
				<p className="copyright-info py-2 mt-4">
					&copy; {year} | build with <span>💙 </span>
					&nbsp;by&nbsp;
					<h5>Tanjim Ahmed</h5>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

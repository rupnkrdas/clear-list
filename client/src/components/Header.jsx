import { Link } from "react-router-dom";
import signUpImage from "../assets/login-header.png";

export default function Header({
	heading,
	paragraph,
	linkName,
	linkUrl = "#",
	isLoginPage,
}) {
	return (
		<div>
			{isLoginPage ? (
				<div className="text-8xl font-extrabold flex justify-center tracking-tight">
					Clear List.
				</div>
			) : (
				<div className="flex justify-center">
					<img alt="" src={signUpImage} />
				</div>
			)}
			<h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900">
				{heading}
			</h2>
			<p className="text-center text-sm text-gray-600 mt-2">
				{paragraph}{" "}
				<Link
					to={linkUrl}
					className="font-medium text-purple-600 hover:text-purple-500"
				>
					{linkName}
				</Link>
			</p>
		</div>
	);
}

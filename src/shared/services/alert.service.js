import { toast } from "react-toastify";

const showAlert = (type, message) => toast[
    type
](message);
export default showAlert;
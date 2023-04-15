import bookContext from "../context/books";
import { useContext } from "react";

function useBooksContext() {
	return useContext(bookContext);
}

export { useBooksContext };

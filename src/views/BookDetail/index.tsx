import { Api_baseUrl } from "@/utils";
import Link from "next/link";
const getBookDetail = async (id: any) => {
  console.log(Api_baseUrl, " base url");
  let data = await fetch(`${Api_baseUrl}/books/${id}`);
  let booksData = await data.json();
  return booksData;
};
const BookDetail_ = async ({ params }: { params: { id: number } }) => {
  let detail = await getBookDetail(params.id);
  return (
    <div className="item">
      <img src="https://picsum.photos/400/300" alt="" />
      <div>
        <p>
          {" "}
          <strong>Name: </strong> {detail?.name}
        </p>
        <p>
          {" "}
          <strong>Author: </strong> {detail?.author}
        </p>
        <p>
          {" "}
          <strong>Type: </strong> {detail?.type}
        </p>
        <p>
          {" "}
          <strong>Price: $</strong> {detail?.price}
        </p>
        <p>
          {" "}
          <strong>Current Stock: </strong> {Math.floor(Math.random() * 10)}
        </p>

        <p>
          {" "}
          <strong>Availibility: </strong> {detail?.available ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};
export default BookDetail_;

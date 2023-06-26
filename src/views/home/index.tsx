import { Api_baseUrl } from "@/utils";
import Link from "next/link";
const getBooks = async () => {
  console.log(Api_baseUrl, " base url");
  let data = await fetch(`${Api_baseUrl}/books`);
  let booksData = await data.json();
  return booksData;
};
const Home_ = async () => {
  let books = await getBooks();
  console.log(books, " books new");
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 ">
      {books.map((item: any, ind: number) => (
        <Link href={`/bookdetail/${item.id}`}>
          <div className="item" key={item.id}>
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <p>
                {" "}
                <strong>Name: </strong> {item?.name}
              </p>
              <p>
                {" "}
                <strong>Type: </strong> {item?.type}
              </p>

              <p>
                {" "}
                <strong>Availibility: </strong> {item?.available ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Home_;

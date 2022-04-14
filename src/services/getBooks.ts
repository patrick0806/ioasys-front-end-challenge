import { issueRequest } from "../util/issusRequest";
export async function getBooks() {
  return issueRequest({ path: `/books?page=${1}&amount=${25}`, method: "GET" });
}

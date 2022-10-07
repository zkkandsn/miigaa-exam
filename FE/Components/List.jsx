import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function List() {
  const [add, setAdd] = useState();
  const listsApi = "http://localhost:3000/list";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(listsApi, fetcher);
  const addList = (e) => {
    e.preventDefault();
    const list = e.target[0].value;
    axios
      .post("http://localhost:3000/list", {
        list: list,
      })
      .then((res) => {
        setAdd(res.data);
        location.reload();
      });
  };
  return (
    <>
      <div className="header">
        <h2>My ToDo list</h2>
        <div className="dataLength">0/4</div>
      </div>

      <div className="form">
          <div className="inputRadio">
            {data?.map((e) => (
              <>
                <div className="radio">
                  <div className="input">
                    <input type="radio" name="" id="" />
                    <label htmlFor={e?.data}>{e?.list}</label>
                  </div>
                  <div className="img">
                    <BsPencil />
                    <MdDelete />
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
          <form action="" onSubmit={addList}>
          <div className="addInput">
            <input
              type="text"
              className=""
              placeholder="what's next?"
              name="list"
              id="list"
            />
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </>
  );
}

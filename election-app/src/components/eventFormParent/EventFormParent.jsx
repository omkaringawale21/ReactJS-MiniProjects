import {  useState } from "react";
import EventForm from "../../pages/EventForm";

const Parent = (props) => {
  const [data, setData] = useState([]);

  const [candidateListData, setcandidateListData] = useState([]);
  const [emp, setEmp] = useState({
    eventTitle: "",
    prize: "",
    date: "",
    candidate: "",
    candidateList: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setEmp({
      ...emp,
      [name]: value,
    });
  };


  const btnClick = (candidateValue) => {
    setcandidateListData([
      ...candidateListData,
      {
        candidate: candidateValue,
      },
    ]);
  };
  console.log("candidateListData", candidateListData);

  const onBtnClick = () => {
    console.log("employee object", emp);

    setData([
      ...data,
      {
        id: Date.now(),
        eventTitle: emp.eventTitle,
        prize: emp.prize,
        date: emp.date,
        candidate: candidateListData,
      },
    ]);

    setcandidateListData([]);

    setEmp({
      eventTitle: "",
      prize: "",
      date: "",
      candidate: "",
    });
  };
  console.log("data", data);
  return (
    <>
      <EventForm
        eventTitle={emp.eventTitle}
        prize={emp.prize}
        date={emp.date}
        candidate={emp.candidate}
        handleOnChange={handleOnChange}
        onBtnClick={onBtnClick}
        btnClick={btnClick}
      />
    </>
  );
};
export default Parent;

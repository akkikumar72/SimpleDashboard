import React, { Fragment, useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import styles from "./Form.module.css";
import { useFetchResult } from "../../api/result";
import { formatDateTime } from "../../utils/utils";
import Table from "../Table/Table";

const initialState = {
  dailyData: [
    {
      date_trunc: "",
      avg: 0,
    },
  ],
  chartLabels: [],
  chartData: [],
  colData: [],
};

const Form = () => {
  const [state, setstate] = useState(initialState);
  const { data: results } = useFetchResult();

  useEffect(() => {
    if (results) {
      setstate((previousState) => {
        return {
          ...previousState,
          dailyData: results?.query_result?.data.rows,
          colData: results?.query_result?.data.columns,
        };
      });
    }
  }, [results]);

  const onSubmit = (e) => {
    e.preventDefault();
    let chartLabels = state.dailyData
      .map((data) => {
        return formatDateTime(Object.values(data)[0]);
      })
      .filter((e) => e);
    let chartData = state.dailyData
      .map((data) => {
        return Object.values(data)[1];
      })
      .filter((e) => e);

    setstate((previousState) => {
      return {
        ...previousState,
        chartData: chartData,
        chartLabels: chartLabels,
      };
    });
  };
  return (
    <>
      <h2>Create your own custom charts and dashboards using plain SQL.</h2>
      <form className={styles.form}>
        <Fragment>
          <div className="input-group mb-3">
            <span className="input-group-text">SQL queries here</span>
            <textarea
              className="form-control form-control-lg"
              aria-label="With textarea"
            />
          </div>
        </Fragment>

        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="container-fluid">
        <div className="d-flex justify-content-center col-sm-12">
          {state.chartData.length && state.chartLabels.length ? (
            <>
              <div className="row">
                <div className="col-sm-12">
                  <Chart {...state} />
                </div>
                <div className="col-sm-12">
                  <Table {...state} />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Form;

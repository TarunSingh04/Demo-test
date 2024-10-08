import React from "react";
import styles from "./styles.module.scss";
import Barmetrics from "./bar-metrics/Barmetrics";
import Linemetrics from "./line-metrics/Linemetrics";
import Metricsdatatable from "./metrics-datatable/Metricsdatatable";

const Scorecardmetrics = () => {
  return (
    <div className={styles.Metrics}>
      <div className={styles.graphcont}>
        <div className={styles.graph}>
          <div className={styles.scorecardLabelcont}>
            <h2>Scorecard Comparison</h2>
            <div className={styles.scoregraph}>
               <div className={styles.verticalAlign}>Overall Score</div>
               <div className={styles.submaingraph}>
               <Barmetrics/>
               </div>
            </div>
          </div>
        </div>
        <div className={styles.graph}>
        <div className={styles.scorecardLabelcont}>
            <h2>Scorecard Analytics</h2>
            <div className={styles.scoregraph}>
               <div className={styles.verticalAlign}>Overall Score</div>
               <div className={styles.submaingraph}>
               <Linemetrics/>
               </div>
            </div>
          </div>
        </div>
        <div className={styles.graph}>
        <div className={styles.scorecardLabelcont}>
            <h2>Metric Cumulative Comparison</h2>
            <div className={styles.scoregraph}>
               <div className={styles.submaingraph}>
               <Metricsdatatable/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecardmetrics;

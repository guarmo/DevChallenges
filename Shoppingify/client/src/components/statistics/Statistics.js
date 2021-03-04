import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  getHistoryLists,
  getStats,
  groupByMonth,
} from "../../actions/historyList";

const Statistics = ({
  historyList: { lists, statsItems, statsCategory, groupMonths },
  getHistoryLists,
  getStats,
  groupByMonth,
}) => {
  const [loading, setLoading] = useState(false);
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    async function getListsOnLoad() {
      setLoading(true);
      await getHistoryLists();
      await getStats(lists);
      await groupByMonth(lists);

      groupMonths &&
        (await setGraphData({
          labels: [...groupMonths.months],
          datasets: [
            {
              label: "Shopping lists",
              fill: false,
              lineTension: 0.5,
              backgroundColor: "#FFFFFF",
              borderColor: "#F9A109",
              borderWidth: 2,
              data: [...groupMonths.qty],
            },
          ],
        }));

      setLoading(false);
    }
    getListsOnLoad();
  }, []);

  return (
    <div
      style={{ width: "65%" }}
      className="bg-gray-100 px-4 sm:px-16 overflow-scroll"
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-2xl mb-6">Top items</h1>

              {statsItems &&
                statsItems.map((item, index) => (
                  <div key={index}>
                    <div className="w-full flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>{`${item.percentage}%`}</span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                        <div
                          style={{ width: `${item.percentage}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cYellow-main"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div>
              <h1 className="text-2xl mb-6">Top Categories</h1>

              {statsCategory &&
                statsCategory.map((catStats, index) => (
                  <div key={index}>
                    <div className="w-full flex justify-between text-sm">
                      <span>{catStats.name}</span>
                      <span>{`${catStats.percentage}%`}</span>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cGray-light">
                        <div
                          style={{ width: `${catStats.percentage}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cBlue-main"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Graph */}
          <div>
            <h1 className="text-2xl my-6">Monthly Summary</h1>
            <div>
              <Line
                data={graphData}
                options={{
                  title: {
                    display: false,
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  historyList: state.historyList,
});

export default connect(mapStateToProps, {
  getHistoryLists,
  getStats,
  groupByMonth,
})(Statistics);

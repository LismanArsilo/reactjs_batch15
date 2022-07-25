import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneRegionRequest } from "../../Redux-Saga/Action/RegionAction";

export default function RegionDetail(props) {
  const dispatch = useDispatch();
  const { region } = useSelector((state) => state.regionStated);

  useEffect(() => {
    dispatch(GetOneRegionRequest(props.id));
  }, []);

  return (
    <div className=" container m-auto pt-10 w-2/12">
      <div className="outline-double outline-button pt-10 rounded-xl shadow-2xl ">
        <div className=" flex justify-center ">
          <span className="font-bold text-lg">{region.region_name}</span>
        </div>
        <h2 className="text-center mt-5 font-semibold">
          Id : {region.region_id}
        </h2>
        <div className="text-center font-semibold">
          <h3 className="">Region Name</h3>
          <span>{region.region_name}</span>
        </div>
        <div className="text-right pr-4 pt-4 pb-3">
          <button
            onClick={() => props.closeAdd(false)}
            className="bg-button px-3 py-1 ring-1 ring-button font-semibold rounded-2xl hover:bg-purple-700"
          >
            ⩹ back
          </button>
        </div>
      </div>
    </div>
  );
}

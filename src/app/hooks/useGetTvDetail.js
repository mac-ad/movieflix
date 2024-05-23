import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiEndPoints } from "../statics/constants";
import { fetchOptions } from "../utils/helpers";

export const useGetTvDetail = ({ tvId }) => {
  const [loading, setLoading] = useState(false);
  const { tvId: id } = useParams();

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const [tvResponse, tvGenreResponse] = await Promise.all([
          fetch(apiEndPoints.tv.tvDetails(id), fetchOptions()),
        ]);
        const [tvDetail] = await Promise.all([tvResponse.json()]);
        console.log("TvDZetao = ", tvDetail);
        setDetail(tvDetail);
        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setLoading(false);
      }
    })();
  }, [id]);

  return [detail, loading];
};

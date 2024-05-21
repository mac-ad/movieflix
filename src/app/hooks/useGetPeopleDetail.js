import { useEffect, useState } from "react";
import {
  fetchOptions,
  getRating,
  getReleaseDate,
  getReleaseYear,
  getRuntime,
} from "../utils/helpers";
import { apiEndPoints } from "../statics/constants";
import { useParams } from "react-router-dom";

export const useGetPeopleDetail = () => {
  const [loading, setLoading] = useState(false);
  const { peopleId: id } = useParams();

  const [peopleDetail, setPeopleDetail] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      let res = await fetch(
        apiEndPoints.person.personDetails(id),
        fetchOptions()
      );

      let personDetail = await res.json();

      setPeopleDetail(personDetail);

      setLoading(false);
    })();
  }, [id]);

  return [peopleDetail, loading];
};

import React, { useEffect } from "react";
import { useDispatch} from "react-redux";

import { fetchAdsByAdvertiserAsync } from "../slice";
import { Dispatch } from "../../../app/store";

// interface AdData {
//   adUrl: string;
//   directingUrl: string;
//   // Add other properties if there are more
// }

const PublishAd: React.FC = () => {
  // const [enterAd, setEnterAd] = useState<boolean>(false);
  // const ads: Ad[] = useSelector(selectAds);
  const dispatch = useDispatch<Dispatch>();

  // const handleEnterAd = () => {
  //   setEnterAd((prevState) => !prevState);
  // };

  useEffect(() => {
    const jwt_token: string | null = localStorage.getItem("jwt_token");

    if (!jwt_token) {
      console.error("JWT token not found");
      return;
    }

    dispatch(fetchAdsByAdvertiserAsync(jwt_token));
  }, [dispatch]);

  return <div className="mt-24 lg:mt-28">hi</div>;
};

export default PublishAd;

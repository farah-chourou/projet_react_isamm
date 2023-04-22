import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { fDate } from "../../../../functions/formatTime";
import EventService from "../../../../services/EventService";
import { Link, useNavigate, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

function EventList() {
  const navigate = useNavigate();

  const [Events, setEvents] = useState([]);
  useEffect(() => {
    EventService.GetAllEvents()
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNavigateDetail = (_id) => {
    navigate(`/dash/main/event/${_id}`);
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Events.map((item) => (
          <SwiperSlide>
            <Box
              onClick={(_id) => handleNavigateDetail(item._id)}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
                borderRadius: 4,
                maxWidth: 400,
                cursor: "pointer",
                height: 150,
                margin: 1,
              }}
            >
              <Box
                sx={{
                  marginLeft: 2,
                }}
              >
                <Typography variant="subtitle1">
                  {fDate(item.eventDateDebut)}
                </Typography>

                <Typography variant="h6">{item.eventName}</Typography>
                <Typography variant="caption">{item.description}</Typography>
              </Box>
              <Box sx={{ marginLeft: 6 }}>
                <Button
                  startIcon={<StarBorderIcon />}
                  variant="outlined"
                  size="small"
                >
                  intéressé
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </>
  );
}

export default EventList;

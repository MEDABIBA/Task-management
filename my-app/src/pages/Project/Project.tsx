import * as React from "react";
import { GoArrowLeft } from "react-icons/go";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.scss";

const Project = () => {
  return (
    <>
      <header className="header">
        <div className="left-side">
          <GoArrowLeft className="back" />
          <div className="left-side-block">
            <h2 className="left-side-block-h2">Веб-приложение</h2>
            <p className="left-side-block-text">Проект управления задачами</p>
          </div>
        </div>
        <Stack direction="row" spacing={2} className="right-side">
          <Button className="button-edit" variant="contained">
            <span>{<BsClipboard2PlusFill />} Редактировать</span>
          </Button>
          <Button className="button-delete" variant="contained">
            <span>{<BsTrash3Fill />} Удалить</span>
          </Button>
        </Stack>
      </header>
      <main className="main">
        <div className="container">
          <section className="info">
            <div className="progress-bar">
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                }}>
                <CircularProgress
                  size={80}
                  color="inherit"
                  variant="determinate"
                  value={76}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "800",
                    }}>{`${Math.round(76)}%`}</Typography>
                </Box>
              </Box>
              <div className="progress-bar-text">Прогресс проекта</div>
            </div>
            <div className="all-tasks">
              <div className="all-tasks-total">
                <div className="all-tasks-total-number">24</div>
                <div>всего задач</div>
              </div>
              <div>
                <FcOk /> {3} выполнено
              </div>
              <div>
                <FcMediumPriority /> {2} в работе
              </div>
            </div>
            <div className="members">
              <div className="all-members">
                <div className="all-members-total">
                  <div className="all-members-total-number">6</div>
                  <div>Участников</div>
                </div>

                <button className="all-members-add" onClick={() => {}}>
                  + Добавить участника
                </button>
              </div>
            </div>
            <div className="deadline">
              <div>
                <FaCalendarAlt size={40} style={{ marginBottom: "5px" }} />
              </div>
              <p className="deadline-text">Дедлайн проекта</p>
              <div className="deadline-data">
                <p>{"30 янв 2025"}</p>
                <p className="deadline-data-remain">
                  <IoMdTime color="orange" /> Осталось 13 дней
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Project;

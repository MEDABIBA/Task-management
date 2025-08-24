import { GoArrowLeft } from "react-icons/go";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { LuPlus } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import avatar from "../../assets/images/login.jpg";
import "./index.scss";
import Layout from "../../layout/Layout";

const Project = () => {
  return (
    <Layout>
      <div className="project">
        <section className="header">
          <div className="left-side">
            <GoArrowLeft className="back" />
            <div className="left-side-block">
              <h2 className="left-side-block-h2">Веб-приложение</h2>
              <p className="left-side-block-text">Проект управления задачами</p>
            </div>
          </div>
          <Stack direction="row" spacing={2} className="right-side">
            <Button className="buttons" variant="contained">
              <span>{<BsClipboard2PlusFill />} Редактировать</span>
            </Button>
            <Button className="button-delete" variant="contained">
              <span>{<BsTrash3Fill />} Удалить</span>
            </Button>
          </Stack>
        </section>
        <section className="main">
          <div className="container container__bg">
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
          <div className="container container__bg">
            <section className="description">
              <div className="description-header">
                <h2 className="description-header-title">Описание проекта</h2>
                <HiPencil
                  size={25}
                  opacity={0.6}
                  className="description-header-icon"
                  onClick={() => {}}
                />
              </div>

              <p className="description-text">
                Разработка современного веб-приложения для управления задачами с
                функционалом создания проектов, назначения задач, отслеживания
                прогресса и совместной работы команды. Приложение должно
                включать интуитивный интерфейс, систему уведомлений и
                возможность интеграции с внешними сервисами.
              </p>
            </section>
          </div>
          <div className="container-for-tasks-and-members">
            <section className="tasks-and-members">
              <div className="wrapper">
                <div className="wrapper-header">
                  <h2> Задачи проекта</h2>
                  <Button className="buttons" variant="contained">
                    <span
                      style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gap: "5px",
                        alignItems: "center",
                      }}>
                      <LuPlus size={20} /> Новая задача
                    </span>
                  </Button>
                </div>
                <div className="tasks-main">
                  <nav>
                    <ul className="nav">
                      <li className="nav-elem">
                        <button
                          type="button"
                          className="nav-elem-button-active">
                          Все
                        </button>
                      </li>
                      <li className="nav-elem">
                        <button type="button" className="nav-elem-button">
                          В работе
                        </button>
                      </li>
                      <li className="nav-elem">
                        <button type="button" className="nav-elem-button">
                          Выполнено
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <ul className="tasks-main-list">
                    <li className="tasks-main-elem">
                      <BsCircle />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}>
                        <div>
                          <h3 className="tasks-main-elem-title">
                            Создать дизайн главной страницы
                          </h3>
                          <p className="tasks-main-elem-text">
                            Разработать макеты для десктопной и мобильной версии
                          </p>
                          <div style={{ display: "flex" }}>
                            <button className="tasks-main-elem-status">
                              В работе
                            </button>{" "}
                            <span className="tasks-main-elem-deadline">
                              <FaCalendarAlt size={15} /> Срок: 20 янв 2025
                            </span>
                          </div>
                        </div>

                        <img
                          src={avatar}
                          alt="avatar"
                          style={{
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      </div>
                    </li>
                    <li className="tasks-main-elem">
                      <BsCheck2Circle color="green" />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}>
                        <div>
                          <h3 className="tasks-main-elem-title">
                            Создать дизайн главной страницы
                          </h3>
                          <p className="tasks-main-elem-text">
                            Разработать макеты для десктопной и мобильной версии
                          </p>
                          <div style={{ display: "flex" }}>
                            <button className="tasks-main-elem-status">
                              В работе
                            </button>{" "}
                            <span className="tasks-main-elem-deadline">
                              <FaCalendarAlt size={15} /> Срок: 20 янв 2025
                            </span>
                          </div>
                        </div>

                        <img
                          src={avatar}
                          alt="avatar"
                          style={{
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-header">
                  <h2>Участники</h2>
                  <Button className="buttons" variant="contained">
                    <span
                      style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gap: "5px",
                        alignItems: "center",
                      }}>
                      <LuPlus size={20} /> Добавить
                    </span>
                  </Button>
                </div>
                <div className="members-main">
                  <ul className="members-main-list">
                    <li className="members-main-elem">
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          height: "40px",
                          width: "40px",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <div className="members-main-elem-name">
                          Анна Петрова
                        </div>
                        <p className="members-main-elem-role">
                          Project Manager
                        </p>
                      </div>
                      <button className="members-main-elem-button">
                        Админ
                      </button>
                    </li>
                    <li className="members-main-elem">
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          height: "40px",
                          width: "40px",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <div className="members-main-elem-name">
                          Анна Петрова
                        </div>
                        <p className="members-main-elem-role">
                          Project Manager
                        </p>
                      </div>
                      <button className="members-main-elem-button">
                        Участник
                      </button>
                    </li>
                    <li className="members-main-elem">
                      <img
                        src={avatar}
                        alt="avatar"
                        style={{
                          height: "40px",
                          width: "40px",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <div className="members-main-elem-name">
                          Михаил Иванов
                        </div>
                        <p className="members-main-elem-role">
                          Frontend developer
                        </p>
                      </div>
                      <button className="members-main-elem-button">
                        Участник
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Project;

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  hardSkills,
  services,
  languages,
  softSkills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sobre mi | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Sobre Mi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experiencia Laboral</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Habilidades Técnicas</h3>
          </Col>
          <Col lg="7">
            {hardSkills.map((data, i) => {
              return (
                <div key={i} className="hardSkills-container">
                  <h3 className="progress-title">{data.name}</h3>
                  {data.icon}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Habilidades Blandas</h3>
          </Col>
          <Col lg="7">
            {softSkills.map((data, i) => {
              return (
                <div key={i}>
                  <ul className="softSkills-ul">
                    <li>
                      <h3 className="progress-title">{data.name}</h3>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Idiomas</h3>
          </Col>
          <Col lg="7">
            {languages.map((data, i) => {
              return (
                <div className="languageContainer py-2" key={i}>
                  <h5 className="language_title">{data.language}</h5>
                  <p className="language_level">{data.level}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

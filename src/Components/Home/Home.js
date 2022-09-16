import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { bookmark } from "../../Reducer/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css"
import { AiOutlineSearch } from 'react-icons/ai';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeArr: [],
      animeLength: null
    };
  }
  componentDidMount() {
    this.firstCall();
  }
  firstCall = async () => {
    let asd = [];
    await axios
      .get(`https://api.jikan.moe/v4/characters?page=0&limit=15&q&order_by=fav
orites&sort=desc`)
      // .get(`https://hacker-news.firebaseio.com/v0/item/${i + 1}.json`)
      .then(function (response) {
        debugger
        asd.push(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      animeArr: asd[0].data,
      animeLength: asd[0].pagination.items.total
    });
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <h1 className="display-3 my-head">Search Anime Characters</h1>
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search this blog" />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <AiOutlineSearch />
                    {/* <i className="fa fa-search"></i> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5>Total {this.state.animeLength} matching anime Characters found</h5>
            </div>
          </div>
          {/* {this.state.animeArr.map((el, index) => {
            if (el.type === 'story' && el.url)
              return (
                <div className="col-md-4">
                  <div
                    className="card my-2 shadow myCard"
                    key={index}
                  >
                    <div className="card-body">
                      <div className="heightTitle">
                        <h5 className="card-title meri-link">{el.title}</h5>
                      </div>
                      <div className="heightText">
                        <p className="card-text meri-link">{el.type}</p>
                      </div>
                      <div className="heightAuthor">
                        <p className="card-text meri-link">
                          <h5>Author: {el.by}</h5>
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="btn btn-danger btn-sm">
                            <a href={el.url} className="link-light text-decoration-none meri-link" target="_blank">
                              Read More
                            </a>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <button
                            onClick={(event) => this.captureNews(event, index)}
                            className="btn btn-primary btn-sm"
                          >Bookmark this
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
          })} */}
        </div>
        <div className="row p-0">
          <div className="card mt-4">

          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}
export default withRouter(connect(mapStateToProps)(Home));

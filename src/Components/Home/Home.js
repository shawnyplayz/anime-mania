import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css"
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeArr: [],
      animeLength: null,
      searchQuery: null
    };
    this.handleAll = this.handleAll.bind(this)
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
  async search() {
    debugger
    let asd = [];
    await axios
      .get(`https://api.jikan.moe/v4/characters?page=0&limit=15&q=${this.state.searchQuery}&order_by=fav
orites&sort=desc`)
      .then(function (response) {
        debugger
        asd.push(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    if ((asd[0].data).length === 0) {
      this.setState({
        animeArr: null
      })
    }
    this.setState({
      animeArr: asd[0].data,
    });

  }

  handleAll(e) {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() {
    return (
      <div className="container p-0">
        <h1 className="display-3 my-head">Search Anime Characters</h1>
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search this blog" onChange={this.handleAll} />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button" onClick={(e) => this.search(e)}>
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h5>Total {this.state.animeLength} matching anime Characters found</h5>
          </div>
        </div>
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-12 opaque">
              <div className=" p-2 mt-4">
                {
                  this.state.animeArr.map((el, index) => {
                    debugger
                    return (
                      <div className="card my-2 shadow "
                        key={index}>
                        <div className="d-flex flex-row">
                          <div className="img-fluid border">
                            <img className="card-img" src={el.images.jpg.image_url} alt="Card image cap"></img>
                          </div>
                          <div className="card-Header d-flex justify-content-start w-75 pl-3 border">
                            <h3>{el.name}</h3>
                            {el.nicknames.map(item =>
                              <button className="btn">
                                {item}
                              </button>
                            )}
                          </div>
                          <div className="card-Text d-flex justify-content-around border">
                            <h4><BsFillHeartFill />{el.favorites}</h4>
                          </div>
                          <div className="d-flex justify-content-center">
                            <h1><AiOutlineArrowRight /></h1>
                          </div>
                        </div>
                        {/* <div className="d-flex  justify-content-start border">
                          <div className="img-fluid ">
                            <img className="card-img" src={el.images.jpg.image_url} alt="Card image cap"></img>
                          </div>
                        </div>
                        <div className="card-Header justify-content-left">
                          {el.name}
                        </div>
                        <div className="card-Body">
                          {el.favorites}
                        </div> */}
                      </div>

                    )
                  }
                  )
                }
              </div>
            </div>
          </div>


        </div>
        <ToastContainer />
      </div >
    );
  }
}

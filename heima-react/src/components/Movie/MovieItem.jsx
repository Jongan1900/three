import React, { Component } from 'react'
import styles from '../../css/movie_item.scss'
import { Rate } from 'antd';
import MovieList from './MovieList';
const stylec={width: "100%", textOverflow: "ellipsis", "overflowX": "hidden", whiteSpace: "nowrap"}
export default class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    componentWillMount(){
        // console.log(this);
        
      this.setState({
        list:this.props
      },()=>{
        //   console.log(this.state.list)
      })
    }
    render() {
        return (
            <div className={styles.box} onClick={this.toDetail} >
                <img src={this.props.images.small.replace('img3.doubanio.com', 'img1.doubanio.com')} className={styles.img} />
                <h4 className={styles.txthidden}>电影名称：{this.props.title}</h4>
                <h4 className={styles.txthidden} style={stylec}>上映年份：{this.props.pubdates[0]}年</h4>
                <h4>电影类型：{this.props.genres.map(item =>
                    item + " ")}
                </h4>
                <Rate disabled defaultValue={this.props.rating.average/2} />
            </div>
        )
    }
    toDetail=()=>{
        // console.log(this.props);
    this.props.history.push('/movie/detail/'+this.props.id)
        // console.log(this.props.history.push('/movie/detail/'+this.props.id));
    }
}

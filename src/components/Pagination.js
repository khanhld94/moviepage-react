import React, { Component } from 'react';

class Pagination extends Component{
    constructor(props,context){
        super(props,context);
        this.renderPagination = this.renderPagination.bind(this);
        this.pagination = this.pagination.bind(this);
        this.state = {
            currentPage: 1,
        }
    }
    renderPagination(){
        let count = this.props.allItems.length
        return Math.ceil(count/this.props.mPerPage)
    }
    pagination(page){
        this.setState({
            currentPage: page
        })
        this.props.pagination(page)
    }
    render(){
        let count = this.renderPagination();
        let numberList =[];
        if(count <= 10){
            for(let i=1; i <= count; i++){
                numberList.push(
                    <li style={{color: "blue"}} key={"page"+i} className={"page-item "+ (this.state.currentPage === i ? "active" : null)}>
                        <a className="page-link"
                           onClick={()=>this.pagination(i)}>{i}</a></li>
                )
            }
        }
        else {
            if (this.state.currentPage <= 4){
                for(let i = 1; i<= this.state.currentPage; i ++){
                    numberList.push(
                        <li style={{color: "blue"}} key={"page"+i} className={"page-item "+ (this.state.currentPage === i ? "active" : null)}>
                            <a className="page-link"
                               onClick={()=>this.pagination(i)}>{i}</a></li>
                    )
                }
                numberList.push(<li style={{color: "blue"}} key={"page"+(this.state.currentPage+1)} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(this.state.currentPage+1)}>{(this.state.currentPage+1)}</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page"+(this.state.currentPage+2)} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(this.state.currentPage+2)}>{(this.state.currentPage+2)}</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page"} className={"page-item"}>
                    <a className="page-link"
                    >.....</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page"+(count)} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(count)}>{count}</a></li>)
            }
            else if (this.state.currentPage >= count - 3){
                numberList.push(<li style={{color: "blue"}} key={"page"+1} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(1)}>1</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page"} className={"page-item"}>
                    <a className="page-link"
                    >.....</a></li>)
                for (let i=this.state.currentPage -2; i<= count; i ++){
                    numberList.push(
                        <li style={{color: "blue"}} key={"page"+i} className={"page-item "+ (this.state.currentPage === i ? "active" : null)}>
                            <a className="page-link"
                               onClick={()=>this.pagination(i)}>{i}</a></li>
                    )
                }
            }
            else {
                numberList.push(<li style={{color: "blue"}} key={"page"+1} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(1)}>1</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page dotfirst"} className={"page-item"}>
                    <a className="page-link"
                    >.....</a></li>)
                for (let i=this.state.currentPage - 2 ; i<= this.state.currentPage+2; i++){
                    numberList.push(
                        <li style={{color: "blue"}} key={"page"+i} className={"page-item "+ (this.state.currentPage === i ? "active" : null)}>
                            <a className="page-link"
                               onClick={()=>this.pagination(i)}>{i}</a></li>
                    )
                }
                numberList.push(<li style={{color: "blue"}} key={"page dotlast"} className={"page-item"}>
                    <a className="page-link"
                    >.....</a></li>)
                numberList.push(<li style={{color: "blue"}} key={"page"+(count)} className={"page-item"}>
                    <a className="page-link"
                       onClick={()=>this.pagination(count)}>{count}</a></li>)
            }

        }

        return(
            <div className="movie-pagination">
                <ul className="pagination justify-content-center">
                    {this.state.currentPage < 2 ? (
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a style={{color: "orange"}} className="page-link" onClick={()=>this.pagination(this.state.currentPage-1)}>Previous</a>
                        </li>
                    )}
                    {numberList}
                    {
                        this.state.currentPage === Math.ceil(this.props.allItems.length/this.props.mPerPage) ?
                            (<li className="page-item disabled">
                                <a className="page-link">Next</a>
                            </li>) :
                            (<li className="page-item">
                                <a style={{color: "orange"}} className="page-link" onClick={()=>this.pagination(this.state.currentPage+1)}>Next</a>
                            </li>)
                    }

                </ul>
            </div>
        )
    }
}
export default Pagination;
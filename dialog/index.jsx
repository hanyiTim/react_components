/**
 *
 *
 *
 * 
 */

import React,{Component,PropTypes} from 'react';
import style from './index.less';
import {C} from '../../util/common.js';



export default class Comp extends Component{
	constructor(props) {
		super(props);

		this.state={
			title:this.props.title || "提示",
			cancelStr:this.props.cancelStr || "取消",
			confirmStr:this.props.confirmStr || "确定",
			centerStyle:{}
		}
	}
	handleConfirm(){
		this.props.handleConfirm && this.props.handleConfirm.call && this.props.handleConfirm()
	}
	handleCancel(){
		this.props.handleCancel && this.props.handleCancel.call && this.props.handleCancel();
	}
	stopPropagation(event){
		event.stopPropagation();
	}
	preventDefault(event){
		event.preventDefault();
	}
	render(){
		let content =this.props.content || ""
		return (
			this.props.visible ? (
				<div className={style.wrap} onClick={this.handleCancel.bind(this)} onTouchMove={this.preventDefault}>
					<div ref="box" className={style.box} onClick={this.stopPropagation}>
						{
							this.props.title ? (
								<div className={style.title}>{this.state.title}</div>
							):null
						}
						<div className={style.contain}>
							{content}
						</div>
						<div className={style.footer}>
							{
								this.props.handleCancel?(
									<a onClick={this.handleCancel.bind(this)} href="javascript:void(0);" className={[style.btn,style.cancelBtn].join(" ")} >{this.state.cancelStr}</a>
								):null
							}
							{
								this.props.handleConfirm?(
									<a onClick={this.handleConfirm.bind(this)} href="javascript:void(0);" className={[style.btn,style.confirmBtn].join(" ")} >{this.state.confirmStr}</a>
								):null
							}
						</div>
					</div>
				</div>
			):null
		)
	}
}

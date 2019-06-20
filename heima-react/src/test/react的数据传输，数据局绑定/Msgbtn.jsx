import React from 'react'

export default class Msgbtn extends React.Component {
    render() {
        return <div>
            <label htmlFor="">评论人：</label><br />
            <input type="text" style={{ width: "100%" }} ref="name" /><br />
            <label htmlFor="">评论内容：</label><br />
            <textarea ref="text" name="" id="" cols="30" rows="4" style={{ width: "100%" }}></textarea><br />
            <input type="button" value="发表评论" onClick={() => { this.send() }} />
        </div>
    }
  
    send = () => {
        // console.log(this);
        var cmtsname = this.refs.name.value;
        var cmtstext = this.refs.text.value;
        if (cmtsname.trim() != "" && cmtstext.trim() != "") {

            var cmts = {
                name: cmtsname,
                text: cmtstext
            }
            var cmtslist = JSON.parse(localStorage.getItem('cmts') || "[]");
            cmtslist.unshift(cmts)
            console.log(cmtslist);
            localStorage.setItem('cmts', JSON.stringify(cmtslist));
            this.refs.name.value=this.refs.text.value=""
            console.log(this);
            this.props.reload()
        }
    }

}
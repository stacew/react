import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) {
            history.push("/"); //render에서 삽입해도 동작은 하는데, 어차피 호출되기 때문에 처리 담당 함수일수도
        }
    }
    render() {
        const { location } = this.props;
        if (location.state == undefined) {
            return null;
        }

        return (
            <div>
                <span> {location.state.title}</span>
                <img className="movieImg"
                    src={location.state.poster}
                    alt={location.state.title}
                    title={location.state.title} />
            </div>
        );
    }
}

export default Detail;
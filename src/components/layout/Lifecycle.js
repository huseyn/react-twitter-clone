import React from 'react'

const Lifecycle = () => {
    return (
        <div className="lifecycle">
            <ul>
                <li>
                    <div className="posted">
                        <div className="img">
                            <img src="./img/team_01.jpg" alt="Profile" />
                        </div>
                        <div className="shared">
                            <div className="user-items">
                                <a href="">Huseyn Mikayil</a>
                                <span>@huseyn_mikayil</span>
                                <span>15 min</span>
                            </div>
                            <div className="text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aut iusto ipsam soluta dolorum, suscipit laudantium,
                                    atque dicta reiciendis ducimus expedita veniam voluptate
                                    fugit fuga nihil autem cum quo dolore doloremque
                                    eveniet!
                      </p>
                            </div>
                            <div className="shared-tools">
                                <div className="shared-items">

                                    <a href=""><i className="fas fa-comment"></i></a>
                                    <a href=""
                                    ><i className="fa fa-retweet" aria-hidden="true"></i
                                    ></a>
                                    <a href=""><i className="fas fa-heart"></i></a>
                                    <a href=""> <i className="fas fa-arrow-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Lifecycle;

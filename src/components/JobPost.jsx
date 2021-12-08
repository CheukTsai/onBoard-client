import React from 'react'
import { Link } from 'react-router-dom'
import "styling/job.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

function JobPost(props) {

    const job = props.job

    function create() {
        return (<div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />)
    }

    return (
        <Link to={`/job/${job._id}`} className="card job-wrapper">
            <div className="card-body job-body">
                {/* <img src="..." className="card-img-top" alt="" /> */}
                <div className="card-title job-title jobshow-title">{job.title}</div>

                <div className="text-muted job-subtitle mb-3">{job.location}</div>
                <div className="info money mb-3">
                    <p className="card-text"><FontAwesomeIcon icon={faMoneyBill} /> ${job.salary}</p>
                </div>
                <div className="description-wrapper mb-3">
                    <div className="text-muted ">
                        {create()}
                    </div>

                </div>
            </div>
            <div className="job-footer">
                <div className="info money mb-3 red">
                    <p className="card-text"> {props.status}</p>
                </div>
                Posted: {job.createdAt}
            </div >
        </Link>
    )
}

export default JobPost

import Link from 'next/link'

function PageTitle({ title }) {
  return (
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{title}</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {' '}<li>{ title }</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle

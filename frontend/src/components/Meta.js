import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bun venit la Gabotronics',
  description:
    'Vindem cele mai bune electronice reconditionate la cel mai bun pret',
  keywords: 'electronice, cumpara electronice, electronice ieftine',
}

export default Meta

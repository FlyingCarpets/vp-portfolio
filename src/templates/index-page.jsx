import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { sanitize } from 'dompurify';

import Layout from 'components/layout';
import { Box } from 'components/box';
import img from 'images/gatsby-astronaut.png';
import { media as MEDIA } from 'lib/media';

const StyledH1 = styled.h1`
  padding-top: 12px;
  padding-bottom: 26px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  text-transform: lowercase;

  ${MEDIA.above.sm`
    padding-top: 30px;
    padding-bottom: 66px;
  `}

  ${MEDIA.above.md`
    padding-top: 80px;
  `}
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;

  border: 1px solid black;
`;

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    markdownRemark: {
      frontmatter: { title },
    },
  } = data;

  return (
    <Layout>
      <Box display={['block', null, null, 'flex']} pt={[0, null, null, 30]}>
        <Box width={['100%', null, null, '25%']}>
          <StyledH1>{title}</StyledH1>
        </Box>
        <Box width={['auto', null, null, '75%']} mx={[40, 98, 40]} pb={10}>
          <Box mb={25}>
            <StyledImg src={img} alt="" />
          </Box>
          <Box mb={25}>
            <StyledImg src={img} alt="" />
          </Box>
          <Box mb={25}>
            <StyledImg src={img} alt="" />
          </Box>
          <Box mb={25}>
            <StyledImg src={img} alt="" />
          </Box>
        </Box>
      </Box>
      {/* <div> */}
      {/*  {edges.map(({ node }) => ( */}
      {/*      <div key={node.frontmatter.title}> */}
      {/*        {node.frontmatter.title}: */}
      {/*        <Link to={node.fields.slug}>{node.fields.slug}</Link> */}
      {/*      </div> */}
      {/*  ))} */}
      {/* </div> */}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;

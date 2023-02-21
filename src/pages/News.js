import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

const ArticleCard = ({ image, title, caption, link }) => {
  return (
    <Col md={6} className="mb-4">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{caption}</Card.Text>
          <a href={link} target="_blank" rel="noreferrer">
            Read more
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      image: "https://lh5.googleusercontent.com/proxy/Htxh5kfD7x7z3MfT0Q3GocD8zb_I4_fydnxjFA0IN9w-saESwVy-4Jwbm8G-VDRdffJfIiOiJtM3rfer6LweMclLKXEX6IzoKHJLK-keOlZNgSmRCcLwrLtzYjo6vdVdIj7VmV8",
      title: "'It's a rewarding experience': Children with disabilities get toys modified for them by UNC students",
      caption: "The students work all year holding bake sales and community benefit nights to make the money to buy the toys.",
      link: "https://abc11.com/children-disabilities-toys-modified-unc-engineer-students/12602887/",
    },
    {
      id: 2,
      image: "https://lh6.googleusercontent.com/proxy/w4CZ4675zNtwoQN8oU_VthqWDkM5UhXiJ6wuTfBHS61Ju9Nd30BLUpKkYcu2seaYnCnqKCpxIyKz9YDP9iX560JetG1o7DnDCBlzV_UXA0jGZZmQ6L0g7BA",
      title: "Making more accessible toys | UNC-Chapel Hill",
      caption: "The Tar Heels behind the CATCH student organization modify toys for children with disabilities and donate them to local medical facilities for children who need them.",
      link: "https://www.unc.edu/discover/making-more-accessible-toys/",
    },
    {
      id: 3,
      image: "https://lh6.googleusercontent.com/proxy/z50U9QEc6k0nXPwm-PDZBOZgV0zYJT8G6NEG8TY3sQqat_JWbOKj1V97zn2DScEo3v4HjmyzvdMjB5o9q99kOxXU55fhgeTRB1ca8WB2e9t_MM7AbvXmQAW_6UULJPPxkL3aXSjeRBqvbv6JjO8LVEEA86rOVEbWGkcTrYZYsBv_zuDCobicEYQwgZLYfQFptT6D81EYhmij25Ph2m9Vq3tcYJVjkhGfrdXAgmAiedleNZRIXx7OT3vg6PwZNGZmdKO986t-IkVx5CqOuAq72r7KKVD3Xj-cq6nTzG5LgZFSSgk9ilziD8TForjHxjHhZ7ARYJi7fnwKbAvJZ4U8RfBVd7YfEwaO7GVCcicpvEo",
      title: "Senior communities are taking care off-campus (free version)",
      caption: "Plus: Apartments planned for Camp North End?; College students adapt toys for kids with special needs; Good Fellows brings in record $2M for charity; Opening day for Pickleball Charlotte",
      link: "https://charlotteledger.substack.com/p/senior-communities-are-taking-care-a37#%C2%A7unc-student-organization-catches-children-who-fall-through-the-cracks-of-the-commercial-toy-industry",
    },
    {
      id: 4,
      image: "https://lh4.googleusercontent.com/proxy/GGybIlc5VDjtVfP1p5oj-6S2AKnMFtR9NN_Al12QJtPyeVRkLlQ-iRkh2h80_QZ4sOm14uBymErVo8gYTfrlGH1juMCgbZ1BiBZV5WF1Ti3pQzSP8TYpBmM",
      title: "Student Org Spotlight: CATCH",
      caption: "Looking to learn something new? Join Carolina Adapts Toys for Children (CATCH) weekly to help adapt toys for children with special needs! PR Chair Katie Chai shares more about the team: ",
      link: "https://studentaffairs.unc.edu/student-org-spotlight-carolina-adapts-toys-for-children/",
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/proxy/DVW4GpaJVOc30NaZm1VZL-jNFUGqo7BrMpUYihBjfxMYho40twY4_xcMmn5iTW3iV2-9v59yKJGTjuDIw649cpWErsYjjsZtByUsILhZAA2fykDetd4JZlgiIAHDBrf4s9PnLIrs5FDNsNvk_lL9Mb052fv6XxBY-nCLYqAtKg",
      title: "Students work to 'CATCH’ kids with disabilities who fall through cracks of toy design",
      caption: "Sophomore Katie Chai never imagined her interest in technology would lead her to the basement in Phillips Hall modifying popular children’s toys. However, that is exactly where she found herself after she joined Carolina Adapts Toys for Children, affectionately known as CATCH.",
      link: "https://www.dailytarheel.com/article/2022/10/university-catch-feature",
    },
    {
      id: 6,
      image: "https://lh4.googleusercontent.com/proxy/668lUmdUxoGynhkfm78wWgjXq5ZY7sYTQRmQhUxrCfrRAxoeeccOa_o5zW8Q7v5fEYrn3kPowiThWw3TziJ4H7nfL_Fr0LoOI44FcfFgNCUhNp-RtFTsebYq3jI4N51e_dy8VXKzB7gld6KsFYv_aWREHk3_A9SIPDn19uN1bRlHvQBgaVg4QC4bxgUaQDEiDOxW0RCy5veJ9XT9hIf83ORrz0HFnSgQYVQly1ulHvYcjnsh1jPMo62mCvw3I0-crrKNEw-BPyCrEJI2IUm0d66J4fDJwDpz2shh_WXQvdoSF4UhkMAvuc4If2fl4QitdmhD3OU1Guw7OZVLdAXX9GhL",
      title: "UNC-Chapel Hill students build adapted toys for kids with disabilities",
      caption: "First year UNC-Chapel Hill student Enakshi Chawla rewires a bubble machine at Carolina Adapts Toys For Children, a student club that modifies toys for children with disabilities.",
      link: "https://www.wunc.org/education/2021-12-20/unc-chapel-hill-students-build-adapted-toys-kids-disabilities-christmas",
    },
  ];

  return (
    <Row>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          image={article.image}
          title={article.title}
          caption={article.caption}
          link={article.link}
        />
      ))}
    </Row>
  );
};

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <ArticleGrid />
    </div>
  )
}

export default News;
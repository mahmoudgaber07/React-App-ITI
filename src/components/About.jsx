import Image from "../assets/img/MahmoudGaber _ LinkedIn.png";
const About = () => {
  return (
    <div className="container mb-5 noselect">
      <div className="row align-items-lg-center">
        <h2>Mahmoud Gaber</h2>
        <div className="col-md-5 col-sm-12">
          <img src={Image} className="img-fluid rounded-pill" alt="my-img" />
        </div>
        <div className="col-md-5 col-sm-12 offset-md-1">
          <h3 className="py-3">Front-end-Developer</h3>
          <p className="text-start">
            I'm a frontend developer with almost one year of experience in
            projects of varying complexity. My expertise is focused on React,
            HTML5, CSS3,Bootstrap, jQuery, JavaScript, AJAX and responsive
            coding. Converting layouts from Photoshop, AdobeXD. Experience with
            frameworks as React and Vue. Confident use of GIT. I consider myself
            a person who follows modern web development practices and new
            technologies. I'm working with a team of professional web design
            developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

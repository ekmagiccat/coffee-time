import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2 className="display-6 instructTitle">
        How To Make A Perfect Pour-Over Coffee
      </h2>
      <div style={{}}>
        <Accordion style={{ width: 550 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>
              <h2 className="display-6">What you will need:</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="smallText">
                <ul>
                  <li>Coffee dripper</li>
                  <li>Coffee filter</li>
                  <li>Kettle</li>
                  <li>Grinder</li>
                  <li>Digital scale</li>
                  <li>Timer</li>
                </ul>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{}}>
        <Accordion style={{ width: 550 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>
              <h2 className="display-6">Instructions:</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="smallText">
                <ol>
                  <li>Bring at least 400 grams (14 oz) of water to a boil.</li>
                  <li>Grind coffee to a coarseness resembling sea salt. </li>
                  <li>
                    Place a filter in the dripper,wet with hot water, then pour
                    excess water out.
                  </li>
                  <li>
                    Add the ground coffee to the filter and gently tap it to
                    level the surface of the grounds.
                  </li>
                  <li>
                    Place the brewer on a carafe or cup, place this entire
                    set-up onto a digital scale, and set it to zero.
                  </li>
                  <li>
                    Start a timer. Begin pouring water slowly over the coffee,
                    starting at the center and moving in a steady spiral toward
                    the edge and back again. Stop pouring when the scale reaches
                    60 grams. Make sure all the grounds are saturated. The pour
                    should take about 15 seconds. Give the coffee an additional
                    30 seconds to bloom before moving on to the second pour.
                  </li>
                  <li>
                    Starting in the center of the grounds, pour in a steady
                    spiral toward the outer edge and then back toward the
                    center. Add roughly 90 grams, bringing the total to 150
                    grams. The goal during this pour is to sink all of the
                    grounds on the surface of the bed. This creates a gentle
                    turbulence that “stirs” the coffee, allowing water to more
                    evenly extract the grounds. Allow 45-65 seconds to elapse.
                  </li>
                  <li>
                    Continue pouring water in a circular motion until the
                    mixture of water and coffee from the second pour drops to
                    the bottom of the filter, coming close to the level of the
                    grounds. Then, pour until reaching the desired grams of
                    water.
                  </li>
                </ol>
                <p>
                  Instructions courtesy of:{" "}
                  <a href="https://bluebottlecoffee.com/us/eng/brew-guides/pour-over">
                    Blue Bottle Coffee
                  </a>
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Instructions;

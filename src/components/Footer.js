import React from 'react'
import {Card,footer,blockquote} from 'react-bootstrap';

function Footer() {
    return (
        <div>
        <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
            BEAUTY begins the moment you decide to be YOURSELF.{' '}
            </p>
            <footer className="blockquote-footer">
            <cite title="Source Title">COCO CHANEL</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
        </div>
    )
}

export default Footer


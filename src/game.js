import React from 'react';
import './game.css';

export default class Game extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'ArrowUp') {
      console.log('Up');
    }

    if (event.key === 'ArrowDown') {
      console.log('Down');
    }

    if (event.key === 'ArrowLeft') {
      console.log('Left');
    }

    if (event.key === 'ArrowRight') {
      console.log('Right');
    }
  };

  render() {
    return (
      <div className="Game">
        <h1>SOKOBAN</h1>
        <div className="Content">
          <div className="Playground">
            <div className="Row">
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
            </div>

            <div className="Row">
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Player">👷</div>
              </div>
              <div className="Cell" />
              <div className="Cell" />
              <div className="Cell">
                <div className="Wall" />
              </div>
            </div>

            <div className="Row">
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell" />
              <div className="Cell">
                <div className="Box" />
              </div>
              <div className="Cell">
                <div className="Target" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
            </div>

            <div className="Row">
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
              <div className="Cell">
                <div className="Wall" />
              </div>
            </div>
          </div>

          <div className="Stats">
            <div>Time: 00:00</div>
            <div>Turns: 0</div>

            <div className="Legend">
              <div className="Legend-item">
                <div className="Legend-symbol">
                  <div className="Cell">
                    <div className="Player">👷</div>
                  </div>
                </div>
                <div className="Legend-label">Player</div>
              </div>

              <div className="Legend-item">
                <div className="Legend-symbol">
                  <div className="Cell">
                    <div className="Wall" />
                  </div>
                </div>
                <div className="Legend-label">Wall</div>
              </div>

              <div className="Legend-item">
                <div className="Legend-symbol">
                  <div className="Cell">
                    <div className="Box" />
                  </div>
                </div>
                <div className="Legend-label">Box</div>
              </div>

              <div className="Legend-item">
                <div className="Legend-symbol">
                  <div className="Cell">
                    <div className="Target" />
                  </div>
                </div>
                <div className="Legend-label">Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

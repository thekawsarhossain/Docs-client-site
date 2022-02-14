import { Container } from '@mui/material'

const ForumBody = () => {
  return (
    <div>
      <section
        style={{ padding: '100px', background: '#f9fafb' }}
        className="doc_blog_grid_area sec_pad forum-page-content"
      >
        <Container>
          <div className="container">
            <div className="row wrap flex">
              <div
                style={{
                  flex: '0 0 66.666667%',
                  maxWidth: '66.666667%',
                  position: 'relative',
                  width: '100%',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                }}
                className="col-lg-8"
              >
                <div
                  style={{
                    borderRadius: '6px',
                    background: '#fff',
                    boxShadow: '0px 3px 6px 0px rgb(4 73 89 / 6%)',
                    padding: '12px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '70px',
                  }}
                  className="answer-action"
                >
                  <div className="action-content flex items-center">
                    <div style={{ marginRight: '30px' }} className="image-wrap">
                      <img
                        src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/answer.png"
                        alt="answer action"
                      />
                    </div>
                    <div className="conten">
                      <h2
                        style={{
                          fontSize: '20px',
                          color: '#1d2746',
                          fontWeight: '500',
                          marginBottom: '0',
                          color: '#000000',
                        }}
                        className="ans-title"
                      >
                        Can’t find an answer?
                      </h2>
                      <p style={{ margin: '0' }}>
                        Make use of a qualified tutor to get the answer
                      </p>
                    </div>
                  </div>

                  <div className="action-button-container">
                    <a href="/" className="action_btn btn-ans">
                      Ask a Question
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    padding: '17px 15px',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: '#f7f8f9',
                    padding: '17px 30px',
                    border: '1px solid #eaeeef',
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '6px',
                  }}
                  className="post-header forums-header"
                >
                  <div
                    style={{ flex: '0 0 50%', maxWidth: '50%' }}
                    className="col-md-6 col-sm-6 support-info"
                  >
                    <span> Forum </span>
                  </div>
                  <div
                    style={{ flex: '0 0 50%', maxWidth: '50%' }}
                    className="col-md-6 col-sm-6 support-category-menus"
                  >
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        padding: '0',
                        margin: '0',
                        justifyContent: 'flex-end',
                      }}
                      className="forum-titles"
                    >
                      <li
                        style={{
                          flexBasis: '25%',
                          textAlign: 'right',
                          fontSize: '14px',
                        }}
                        className="forum-topic-count"
                      >
                        Topics
                      </li>
                      <li
                        style={{
                          flexBasis: '25%',
                          textAlign: 'right',
                          fontSize: '14px',
                        }}
                        className="forum-reply-count"
                      >
                        Posts
                      </li>
                      <li
                        style={{
                          flexBasis: '50%',
                          textAlign: 'right',
                          fontSize: '14px',
                        }}
                        className="forum-freshness"
                      >
                        Last Post
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    borderBottomLeftRadius: '6px',
                    borderBottomRightRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 3px 6px 0 rgb(4 73 89 / 6%)',
                  }}
                  className="community-posts-wrapper bb-radius"
                >
                  <div
                    style={{
                      borderBottom: '1px solid #f2f3f4',
                      marginBottom: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      position: 'relative',
                      padding: '23px 15px',
                      borderRadius: '6px',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div className="col-md-6 post-content wrap flex items-center overflow-hidden">
                      <div
                        style={{
                          width: '40px',
                          marginRight: '25px',
                          height: '40px',
                        }}
                        className="author-avatar forum-icon rounded-none"
                      >
                        <img
                          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png"
                          alt="community post p-1"
                        />
                      </div>
                      <div style={{ flex: '2' }} className="entry-content">
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#1d2746',
                            marginBottom: 0,
                            lineHeight: '1.7',
                          }}
                          className="post-title mr-3 inline-block"
                        >
                          <a href="/" style={{ color: '#1d2746' }}>
                            Announcements
                          </a>
                        </h3>
                        <p
                          className="m-0"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                        >
                          This forum is a special forum for general
                          announcements.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ flex: '0 0 50%', maxWidth: '50%' }}
                      className="col-md-6 post-meta-wrapper"
                    >
                      <ul
                        style={{
                          liststyle: 'none',
                          display: 'flex',
                          padding: '0',
                          margin: '0',
                          justifyContent: 'flex-end',
                        }}
                        className="forum-titles"
                      >
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-topic-count"
                        >
                          10
                        </li>
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-reply-count"
                        >
                          105
                        </li>
                        <li
                          style={{
                            flexBasis: '50%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-freshness"
                        >
                          <div
                            style={{
                              display: 'flex',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              flexDirection: 'column',
                            }}
                            className="freshness-box"
                          >
                            <div className="freshness-top leading-5">
                              <div className="freshness-link">
                                <a
                                  style={{ color: '#6b707f' }}
                                  href="/"
                                  title="Reply To: Main Forum Rules &amp; Policies"
                                >
                                  2 years, 2 months ago
                                </a>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '5px',
                                alignItems: 'center',
                              }}
                              className="freshness-btm"
                            >
                              <a
                                style={{
                                  paddingRight: '10px',
                                  color: '#6b707f',
                                }}
                                href="/"
                                title="View Eh Jewel's profile"
                                className="bbp-author-link"
                              ></a>
                              <div className="freshness-name leading-5">
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                ></a>
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                >
                                  <span className="bbp-author-name">
                                    Eh Jewel
                                  </span>
                                </a>
                              </div>
                              <span className="bbp-author-avatar">
                                <img
                                  alt="Eh Jewel"
                                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg"
                                  className="avatar photo"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: '1px solid #f2f3f4',
                      marginBottom: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      position: 'relative',
                      padding: '23px 15px',
                      borderRadius: '6px',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div className="col-md-6 post-content wrap flex items-center overflow-hidden">
                      <div
                        style={{
                          width: '40px',
                          marginRight: '25px',
                          height: '40px',
                        }}
                        className="author-avatar forum-icon rounded-none"
                      >
                        <img
                          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png"
                          alt="community post p-1"
                        />
                      </div>
                      <div style={{ flex: '2' }} className="entry-content">
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#1d2746',
                            marginBottom: 0,
                            lineHeight: '1.7',
                          }}
                          className="post-title mr-3 inline-block"
                        >
                          <a href="/" style={{ color: '#1d2746' }}>
                            Announcements
                          </a>
                        </h3>
                        <p
                          className="m-0"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                        >
                          This forum is a special forum for general
                          announcements.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ flex: '0 0 50%', maxWidth: '50%' }}
                      className="col-md-6 post-meta-wrapper"
                    >
                      <ul
                        style={{
                          liststyle: 'none',
                          display: 'flex',
                          padding: '0',
                          margin: '0',
                          justifyContent: 'flex-end',
                        }}
                        className="forum-titles"
                      >
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-topic-count"
                        >
                          10
                        </li>
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-reply-count"
                        >
                          105
                        </li>
                        <li
                          style={{
                            flexBasis: '50%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-freshness"
                        >
                          <div
                            style={{
                              display: 'flex',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              flexDirection: 'column',
                            }}
                            className="freshness-box"
                          >
                            <div className="freshness-top leading-5">
                              <div className="freshness-link">
                                <a
                                  style={{ color: '#6b707f' }}
                                  href="/"
                                  title="Reply To: Main Forum Rules &amp; Policies"
                                >
                                  2 years, 2 months ago
                                </a>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '5px',
                                alignItems: 'center',
                              }}
                              className="freshness-btm"
                            >
                              <a
                                style={{
                                  paddingRight: '10px',
                                  color: '#6b707f',
                                }}
                                href="/"
                                title="View Eh Jewel's profile"
                                className="bbp-author-link"
                              ></a>
                              <div className="freshness-name leading-5">
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                ></a>
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                >
                                  <span className="bbp-author-name">
                                    Eh Jewel
                                  </span>
                                </a>
                              </div>
                              <span className="bbp-author-avatar">
                                <img
                                  alt="Eh Jewel"
                                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg"
                                  className="avatar photo"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: '1px solid #f2f3f4',
                      marginBottom: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      position: 'relative',
                      padding: '23px 15px',
                      borderRadius: '6px',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div className="col-md-6 post-content wrap flex items-center overflow-hidden">
                      <div
                        style={{
                          width: '40px',
                          marginRight: '25px',
                          height: '40px',
                        }}
                        className="author-avatar forum-icon rounded-none"
                      >
                        <img
                          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png"
                          alt="community post p-1"
                        />
                      </div>
                      <div style={{ flex: '2' }} className="entry-content">
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#1d2746',
                            marginBottom: 0,
                            lineHeight: '1.7',
                          }}
                          className="post-title mr-3 inline-block"
                        >
                          <a href="/" style={{ color: '#1d2746' }}>
                            Announcements
                          </a>
                        </h3>
                        <p
                          className="m-0"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                        >
                          This forum is a special forum for general
                          announcements.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ flex: '0 0 50%', maxWidth: '50%' }}
                      className="col-md-6 post-meta-wrapper"
                    >
                      <ul
                        style={{
                          liststyle: 'none',
                          display: 'flex',
                          padding: '0',
                          margin: '0',
                          justifyContent: 'flex-end',
                        }}
                        className="forum-titles"
                      >
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-topic-count"
                        >
                          10
                        </li>
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-reply-count"
                        >
                          105
                        </li>
                        <li
                          style={{
                            flexBasis: '50%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-freshness"
                        >
                          <div
                            style={{
                              display: 'flex',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              flexDirection: 'column',
                            }}
                            className="freshness-box"
                          >
                            <div className="freshness-top leading-5">
                              <div className="freshness-link">
                                <a
                                  style={{ color: '#6b707f' }}
                                  href="/"
                                  title="Reply To: Main Forum Rules &amp; Policies"
                                >
                                  2 years, 2 months ago
                                </a>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '5px',
                                alignItems: 'center',
                              }}
                              className="freshness-btm"
                            >
                              <a
                                style={{
                                  paddingRight: '10px',
                                  color: '#6b707f',
                                }}
                                href="/"
                                title="View Eh Jewel's profile"
                                className="bbp-author-link"
                              ></a>
                              <div className="freshness-name leading-5">
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                ></a>
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                >
                                  <span className="bbp-author-name">
                                    Eh Jewel
                                  </span>
                                </a>
                              </div>
                              <span className="bbp-author-avatar">
                                <img
                                  alt="Eh Jewel"
                                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg"
                                  className="avatar photo"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: '1px solid #f2f3f4',
                      marginBottom: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      position: 'relative',
                      padding: '23px 15px',
                      borderRadius: '6px',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div className="col-md-6 post-content wrap flex items-center overflow-hidden">
                      <div
                        style={{
                          width: '40px',
                          marginRight: '25px',
                          height: '40px',
                        }}
                        className="author-avatar forum-icon rounded-none"
                      >
                        <img
                          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png"
                          alt="community post p-1"
                        />
                      </div>
                      <div style={{ flex: '2' }} className="entry-content">
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#1d2746',
                            marginBottom: 0,
                            lineHeight: '1.7',
                          }}
                          className="post-title mr-3 inline-block"
                        >
                          <a href="/" style={{ color: '#1d2746' }}>
                            Announcements
                          </a>
                        </h3>
                        <p
                          className="m-0"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                        >
                          This forum is a special forum for general
                          announcements.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ flex: '0 0 50%', maxWidth: '50%' }}
                      className="col-md-6 post-meta-wrapper"
                    >
                      <ul
                        style={{
                          liststyle: 'none',
                          display: 'flex',
                          padding: '0',
                          margin: '0',
                          justifyContent: 'flex-end',
                        }}
                        className="forum-titles"
                      >
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-topic-count"
                        >
                          10
                        </li>
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-reply-count"
                        >
                          105
                        </li>
                        <li
                          style={{
                            flexBasis: '50%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-freshness"
                        >
                          <div
                            style={{
                              display: 'flex',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              flexDirection: 'column',
                            }}
                            className="freshness-box"
                          >
                            <div className="freshness-top leading-5">
                              <div className="freshness-link">
                                <a
                                  style={{ color: '#6b707f' }}
                                  href="/"
                                  title="Reply To: Main Forum Rules &amp; Policies"
                                >
                                  2 years, 2 months ago
                                </a>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '5px',
                                alignItems: 'center',
                              }}
                              className="freshness-btm"
                            >
                              <a
                                style={{
                                  paddingRight: '10px',
                                  color: '#6b707f',
                                }}
                                href="/"
                                title="View Eh Jewel's profile"
                                className="bbp-author-link"
                              ></a>
                              <div className="freshness-name leading-5">
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                ></a>
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                >
                                  <span className="bbp-author-name">
                                    Eh Jewel
                                  </span>
                                </a>
                              </div>
                              <span className="bbp-author-avatar">
                                <img
                                  alt="Eh Jewel"
                                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg"
                                  className="avatar photo"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      borderBottom: '1px solid #f2f3f4',
                      marginBottom: '0',
                      borderRadius: '0',
                      boxShadow: 'none',
                      position: 'relative',
                      padding: '23px 15px',
                      borderRadius: '6px',
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <div className="col-md-6 post-content wrap flex items-center overflow-hidden">
                      <div
                        style={{
                          width: '40px',
                          marginRight: '25px',
                          height: '40px',
                        }}
                        className="author-avatar forum-icon rounded-none"
                      >
                        <img
                          src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/rc1.png"
                          alt="community post p-1"
                        />
                      </div>
                      <div style={{ flex: '2' }} className="entry-content">
                        <h3
                          style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: '#1d2746',
                            marginBottom: 0,
                            lineHeight: '1.7',
                          }}
                          className="post-title mr-3 inline-block"
                        >
                          <a href="/" style={{ color: '#1d2746' }}>
                            Announcements
                          </a>
                        </h3>
                        <p
                          className="m-0"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                        >
                          This forum is a special forum for general
                          announcements.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ flex: '0 0 50%', maxWidth: '50%' }}
                      className="col-md-6 post-meta-wrapper"
                    >
                      <ul
                        style={{
                          liststyle: 'none',
                          display: 'flex',
                          padding: '0',
                          margin: '0',
                          justifyContent: 'flex-end',
                        }}
                        className="forum-titles"
                      >
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-topic-count"
                        >
                          10
                        </li>
                        <li
                          style={{
                            flexBasis: '25%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-reply-count"
                        >
                          105
                        </li>
                        <li
                          style={{
                            flexBasis: '50%',
                            textAlign: 'right',
                            fontSize: '14px',
                          }}
                          className="forum-freshness"
                        >
                          <div
                            style={{
                              display: 'flex',
                              fontSize: '14px',
                              lineHeight: '1.3',
                              flexDirection: 'column',
                            }}
                            className="freshness-box"
                          >
                            <div className="freshness-top leading-5">
                              <div className="freshness-link">
                                <a
                                  style={{ color: '#6b707f' }}
                                  href="/"
                                  title="Reply To: Main Forum Rules &amp; Policies"
                                >
                                  2 years, 2 months ago
                                </a>
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingTop: '5px',
                                alignItems: 'center',
                              }}
                              className="freshness-btm"
                            >
                              <a
                                style={{
                                  paddingRight: '10px',
                                  color: '#6b707f',
                                }}
                                href="/"
                                title="View Eh Jewel's profile"
                                className="bbp-author-link"
                              ></a>
                              <div className="freshness-name leading-5">
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                ></a>
                                <a
                                  style={{
                                    paddingRight: '10px',
                                    color: '#6b707f',
                                  }}
                                  href="/"
                                  title="View Eh Jewel's profile"
                                  className="bbp-author-link"
                                >
                                  <span className="bbp-author-name">
                                    Eh Jewel
                                  </span>
                                </a>
                              </div>
                              <span className="bbp-author-avatar">
                                <img
                                  alt="Eh Jewel"
                                  src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cp5.jpg"
                                  className="avatar photo"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: '0 0 33.333333%',
                  maxWidth: '33.333333%',
                  position: 'relative',
                  width: '100%',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                }}
                className="col-lg-4"
              >
                <div
                  style={{
                    paddingLeft: '28px',
                    fontSize: '14px',
                    paddingRight: '5px',
                  }}
                  className="forum_sidebar"
                >
                  <div className="widget status_widget">
                    <h4
                      style={{
                        marginBottom: '35px',
                        fontSize: '20px',
                        lineHeight: '26px',
                        color: '#1d2746',
                        fontWeight: '700',
                      }}
                      className="c_head"
                    >
                      Information
                    </h4>
                    <p style={{ marginBottom: '25px' }} className="status">
                      Support is
                      <span
                        style={{
                          color: '#f4b130',
                          border: '2px solid #f5d597',
                          padding: '0px 13px',
                          display: 'inline-block',
                          borderRadius: '4px',
                          marginLeft: '5px',
                        }}
                        className="offline"
                      >
                        Offline
                      </span>
                    </p>

                    <div className="open-hours mb-28">
                      <h4
                        style={{
                          fontSize: '16px',
                          color: '#1d2746',
                          fontWeight: '500',
                          marginBottom: '10px',
                        }}
                        className="title-sm"
                      >
                        Our office hours
                      </h4>
                      <p style={{ maxWidth: '240px', color: '#6b707f' }}>
                        Monday - Friday / 10am - 6pm (UTC +4) NewYork
                      </p>
                      <ul
                        style={{
                          marginTop: '28px',
                          paddingLeft: '0',
                          listStyle: 'none',
                        }}
                        className="current-time list-unstyled"
                      >
                        <li style={{ float: 'left', width: '50%' }}>
                          <h4
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              fontWeight: '500',
                              marginBottom: '10px',
                            }}
                            className="title-sm"
                          >
                            Your time
                          </h4>
                          <p
                            style={{
                              maxWidth: '240px',
                              marginBottom: '0',
                              color: '#6b707f',
                            }}
                          >
                            10:30:15 PM
                          </p>
                        </li>
                        <li style={{ float: 'left', width: '50%' }}>
                          <h4
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              fontWeight: '500',
                              marginBottom: '10px',
                            }}
                            className="title-sm"
                          >
                            Your time
                          </h4>
                          <p
                            style={{
                              maxWidth: '240px',
                              marginBottom: '0',
                              color: '#6b707f',
                            }}
                          >
                            10:30:15 PM
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget ticket_widget mt-40">
                    <h4
                      style={{
                        marginBottom: '35px',
                        fontSize: '20px',
                        lineHeight: '26px',
                        fontWeight: '700',
                        color: '#1d2746',
                      }}
                      className="c_head"
                    >
                      Ticket Categories
                    </h4>

                    <ul
                      style={{ marginTop: '-10px' }}
                      className="list-unstyled ticket_categories"
                    >
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="align-center flex">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm5.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Docs WordPress Theme
                          </a>{' '}
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          10
                        </span>
                      </li>
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="align-center flex">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm4.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Product Landing Page
                          </a>
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                            right: '35px',
                            background: ' #0abe76',
                            color: '#fff',
                          }}
                          className="count count-fill"
                        >
                          13
                        </span>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          54
                        </span>
                      </li>
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="align-center flex">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm2.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Knowledge base Template
                          </a>
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          142
                        </span>
                      </li>
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="align-center flex">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm8.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Startup and App WP Theme
                          </a>
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          13
                        </span>
                      </li>
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="align-center flex">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm9.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Clean Email Template
                          </a>
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          123
                        </span>
                      </li>
                      <li
                        style={{
                          borderBottom: '1px solid #e4e7e9',
                          padding: '12px 0 10px',
                          position: 'relative',
                        }}
                      >
                        <div className="flex items-center">
                          <img
                            style={{ marginRight: '10px', marginBottom: '5px' }}
                            src="https://html.creativegigs.net/kbdoc/kbdoc-html/img/home_support/cmm10.png"
                            alt="category"
                          />
                          <a
                            style={{
                              fontSize: '16px',
                              color: '#1d2746',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease-in-out',
                            }}
                            href="/"
                          >
                            Apps WordPress Theme
                          </a>
                        </div>
                        <span
                          style={{
                            position: 'absolute',
                            right: '0',
                            background: '#ebedf0',
                            padding: '4px 7px 2px',
                            borderRadius: '10px',
                            color: '#838793',
                            fontSize: '14px',
                            display: 'inline-block',
                            lineHeight: '1',
                          }}
                          className="count"
                        >
                          18
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="widget tag_widget mt-20">
                    <h4
                      style={{
                        marginBottom: '35px',
                        fontSize: '20px',
                        lineHeight: '26px',
                        fontWeight: '700',
                        color: '#1d2746',
                      }}
                      className="c_head"
                    >
                      Tags
                    </h4>
                    <ul
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        margin: '-5px',
                        marginTop: '-10px',
                      }}
                      className="list-unstyled w_tag_list style-light"
                    >
                      <li style={{ margin: '4px' }}>
                        <a href="/">Swagger</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">KbDoc</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">weCare</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Business</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Download</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Doc</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Product board</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">WordPress</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Design</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">ui/ux</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">Doc Design</a>
                      </li>
                      <li style={{ margin: '4px' }}>
                        <a href="/">DocAll</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ForumBody

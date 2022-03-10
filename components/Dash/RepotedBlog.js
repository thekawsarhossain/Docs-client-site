/* eslint-disable @next/next/no-img-element */
const RepotedBlog = () => {
  return (
    <div className="col-span-12">
      <div className="intro-y box mt-5 p-5">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form id="tabulator-html-filter-form" className="sm:mr-auto xl:flex">
            <div className="items-center sm:mr-4 sm:flex">
              <label className="mr-2 w-12 flex-none xl:w-auto xl:flex-initial">
                Field
              </label>
              <select
                id="tabulator-html-filter-field"
                className="form-select mt-2 w-full sm:mt-0 sm:w-auto 2xl:w-full"
              >
                <option value="name">Name</option>
                <option value="category">Category</option>
                <option value="remaining_stock">Remaining Stock</option>
              </select>
            </div>
            <div className="mt-2 items-center sm:mr-4 sm:flex xl:mt-0">
              <label className="mr-2 w-12 flex-none xl:w-auto xl:flex-initial">
                Type
              </label>
              <select
                id="tabulator-html-filter-type"
                className="form-select mt-2 w-full sm:mt-0 sm:w-auto"
              >
                <option value="like" selected="">
                  like
                </option>
                <option value="=">=</option>
                <option value="<">&lt;</option>
                <option value="<=">&lt;=</option>
                <option value=">">&gt;</option>
                <option value=">=">&gt;=</option>
                <option value="!=">!=</option>
              </select>
            </div>
            <div className="mt-2 items-center sm:mr-4 sm:flex xl:mt-0">
              <label className="mr-2 w-12 flex-none xl:w-auto xl:flex-initial">
                Value
              </label>
              <input
                id="tabulator-html-filter-value"
                type="text"
                className="form-control mt-2 sm:mt-0 sm:w-40 2xl:w-full"
                placeholder="Search..."
              />
            </div>
            <div className="mt-2 xl:mt-0">
              <button
                id="tabulator-html-filter-go"
                type="button"
                className="btn btn-primary w-full sm:w-16"
              >
                Go
              </button>
              <button
                id="tabulator-html-filter-reset"
                type="button"
                className="btn btn-secondary mt-2 w-full sm:mt-0 sm:ml-1 sm:w-16"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="scrollbar-hidden overflow-x-auto">
          <div
            id="tabulator"
            className="table-report table-report--tabulator tabulator mt-5"
            role="grid"
            tabulator-layout="fitColumns"
          >
            <div
              className="tabulator-header"
              style={{ paddingRight: '0px', marginLeft: '0px' }}
            >
              <div className="tabulator-headers" style={{ marginLeft: '0px' }}>
                <div
                  className="tabulator-col"
                  role="columnheader"
                  aria-sort="none"
                  title=""
                  style={{
                    minWidth: '30px',
                    width: '40px',
                    display: 'none',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">&nbsp;</div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="name"
                  title=""
                  style={{ minWidth: '200px', height: '44px', width: '294px' }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">PRODUCT NAME</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="images"
                  title=""
                  style={{ minWidth: '200px', height: '44px', width: '294px' }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">IMAGES</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="remaining_stock"
                  title=""
                  style={{ minWidth: '200px', height: '44px', width: '294px' }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">REMAINING STOCK</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="status"
                  title=""
                  style={{ minWidth: '200px', height: '44px', width: '294px' }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">STATUS</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="actions"
                  title=""
                  style={{ minWidth: '200px', height: '44px', width: '294px' }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">ACTIONS</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="name"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">PRODUCT NAME</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="category"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">CATEGORY</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="remaining_stock"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">REMAINING STOCK</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="status"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">STATUS</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="images"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">IMAGE 1</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="images"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">IMAGE 2</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
                <div
                  className="tabulator-col tabulator-sortable"
                  role="columnheader"
                  aria-sort="none"
                  tabulator-field="images"
                  title=""
                  style={{
                    display: 'none',
                    minWidth: '40px',
                    height: '44px',
                  }}
                >
                  <div className="tabulator-col-content">
                    <div className="tabulator-col-title-holder">
                      <div className="tabulator-col-title">IMAGE 3</div>
                      <div className="tabulator-col-sorter">
                        <div className="tabulator-arrow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabulator-col-resize-handle"></div>
                  <div className="tabulator-col-resize-handle prev"></div>
                </div>
              </div>
              <div className="tabulator-frozen-rows-holder"></div>
            </div>
            <div
              className="tabulator-tableHolder"
              tabIndex="0"
              style={{ height: '658px' }}
            >
              <div
                className="tabulator-table"
                style={{ paddingTop: '0px', paddingBottom: '0px' }}
              >
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-odd"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Samsung Q90 QLED TV
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Electronic
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    70
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-danger flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Inactive
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    Samsung Q90 QLED TV
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    Electronic
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    70
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    0<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-10.jpg,preview-4.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-10.jpg,preview-4.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-10.jpg,preview-4.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-even"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Nike Tanjun
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Sport &amp; Outdoor
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="https://picsum.photos/200/300"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    101
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    Nike Tanjun
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    Sport &amp; Outdoor
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    101
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-8.jpg,preview-7.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-8.jpg,preview-7.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    preview-8.jpg,preview-7.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-odd"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Sony A7 III
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Photography
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-4.b172fabc.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    50
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Sony A7 III
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Photography
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    50
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-14.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-14.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-14.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-even"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Nike Air Max 270
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Sport &amp; Outdoor
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-4.b172fabc.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="http://rubick-vue.left4code.com/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    62
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Nike Air Max 270
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Sport &amp; Outdoor
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    62
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-2.jpg,preview-7.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-2.jpg,preview-7.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-7.jpg,preview-2.jpg,preview-7.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-odd"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Nikon Z6
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Photography
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-15.ea941116.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    100
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Nikon Z6
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Photography
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    100
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-5.jpg,preview-10.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-5.jpg,preview-10.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-5.jpg,preview-10.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-even"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Samsung Galaxy S20 Ultra
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Smartphone &amp; Tablet
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-12.64e6dfb7.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-10.eb96f2a4.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    128
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Samsung Galaxy S20 Ultra
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Smartphone &amp; Tablet
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    128
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-12.jpg,preview-10.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-12.jpg,preview-10.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-12.jpg,preview-10.jpg,preview-5.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-odd"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Nikon Z6
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Photography
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-15.ea941116.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-12.64e6dfb7.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-1.2cae9cad.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    76
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-danger flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Inactive
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Nikon Z6
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Photography
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    76
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    0<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-12.jpg,preview-1.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-12.jpg,preview-1.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-15.jpg,preview-12.jpg,preview-1.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-even"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Dell XPS 13
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        PC &amp; Laptop
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-6.e998bc28.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-5.a579d9bf.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-6.e998bc28.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    217
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-danger flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Inactive
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Dell XPS 13
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    PC &amp; Laptop
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    217
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    0<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-6.jpg,preview-5.jpg,preview-6.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-6.jpg,preview-5.jpg,preview-6.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-6.jpg,preview-5.jpg,preview-6.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-odd"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Sony A7 III
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        Photography
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-4.b172fabc.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-13.c5ac9ae4.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-13.c5ac9ae4.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    50
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Sony A7 III
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Photography
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    50
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-13.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-13.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-13.jpg,preview-13.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
                <div
                  className="tabulator-row tabulator-selectable tabulator-row-even"
                  role="row"
                  style={{ paddingLeft: '0px' }}
                >
                  <div
                    className="tabulator-cell tabulator-row-handle"
                    role="gridcell"
                    title=""
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      display: 'none',
                      height: '64px',
                    }}
                  >
                    <div className="tabulator-responsive-collapse-toggle open">
                      <span className="tabulator-responsive-collapse-toggle-open">
                        +
                      </span>
                      <span className="tabulator-responsive-collapse-toggle-close">
                        -
                      </span>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{
                      width: '294px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '64px',
                    }}
                  >
                    <div>
                      <div className="whitespace-nowrap font-medium">
                        Dell XPS 13
                      </div>
                      <div className="whitespace-nowrap text-xs text-slate-500">
                        PC &amp; Laptop
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex lg:justify-center">
                      <div className="intro-x image-fit h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-4.b172fabc.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-8.473654d2.jpg"
                        />
                      </div>
                      <div className="intro-x image-fit -ml-5 h-10 w-10">
                        <img
                          alt="Rubick Tailwind HTML Admin Template"
                          className="rounded-full"
                          src="/assets/preview-9.595878a6.jpg"
                        />
                      </div>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    55
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="text-success flex items-center lg:justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        icon-name="check-square"
                        data-lucide="check-square"
                        className="lucide lucide-check-square mr-2 h-4 w-4"
                      >
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                      </svg>
                      Active
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="actions"
                    title=""
                    style={{
                      width: '294px',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                    }}
                  >
                    <div className="flex items-center lg:justify-center">
                      <a className="mr-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="check-square"
                          data-lucide="check-square"
                          className="lucide lucide-check-square mr-1 h-4 w-4"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                        </svg>
                        Edit
                      </a>
                      <a className="text-danger flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          icon-name="trash-2"
                          data-lucide="trash-2"
                          className="lucide lucide-trash-2 mr-1 h-4 w-4"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Delete
                      </a>
                    </div>
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="name"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    Dell XPS 13
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="category"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    PC &amp; Laptop
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="remaining_stock"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    55
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="status"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    1<div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-8.jpg,preview-9.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-8.jpg,preview-9.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div
                    className="tabulator-cell"
                    role="gridcell"
                    tabulator-field="images"
                    title=""
                    style={{ display: 'none', height: '64px' }}
                  >
                    preview-4.jpg,preview-8.jpg,preview-9.jpg
                    <div className="tabulator-col-resize-handle"></div>
                    <div className="tabulator-col-resize-handle prev"></div>
                  </div>
                  <div className="tabulator-responsive-collapse"></div>
                </div>
              </div>
            </div>
            <div className="tabulator-footer">
              <span className="tabulator-paginator">
                <label>Page Size</label>
                <select
                  className="tabulator-page-size"
                  aria-label="Page Size"
                  title="Page Size"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
                <button
                  className="tabulator-page"
                  type="button"
                  role="button"
                  aria-label="First Page"
                  title="First Page"
                  data-page="first"
                  disabled=""
                >
                  First
                </button>
                <button
                  className="tabulator-page"
                  type="button"
                  role="button"
                  aria-label="Prev Page"
                  title="Prev Page"
                  data-page="prev"
                  disabled=""
                >
                  Prev
                </button>
                <span className="tabulator-pages">
                  <button
                    className="tabulator-page active"
                    type="button"
                    role="button"
                    aria-label="Show Page 1"
                    title="Show Page 1"
                    data-page="1"
                  >
                    1
                  </button>
                  <button
                    className="tabulator-page"
                    type="button"
                    role="button"
                    aria-label="Show Page 2"
                    title="Show Page 2"
                    data-page="2"
                  >
                    2
                  </button>
                </span>
                <button
                  className="tabulator-page"
                  type="button"
                  role="button"
                  aria-label="Next Page"
                  title="Next Page"
                  data-page="next"
                >
                  Next
                </button>
                <button
                  className="tabulator-page"
                  type="button"
                  role="button"
                  aria-label="Last Page"
                  title="Last Page"
                  data-page="last"
                >
                  Last
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepotedBlog

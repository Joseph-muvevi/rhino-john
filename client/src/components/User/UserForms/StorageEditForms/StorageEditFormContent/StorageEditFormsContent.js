import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import "../StorageEditForms.css";
import axios from "axios";

const StorageEditFormsContent = () => {
  const formik = useFormik({
    initialValues: {
      fullnames: "",
      email: "",
      company: "",
      storagecity: "",
      storagecountry: "",
      warehousetype: "",
      weight: "",
      weightunit: "",
      producttype: "",
      pieces: "",
      datein: "",
      intime: "",
      dateout: "",
      outtime: "",
      trackno: "",
      notes: "",
      quality: "",
      idno: "",
      packaging: "",
      product: "",
      collectedby: "",
      collectoraddress: "",
      collectortel: "",
      observation: "",
    },
    validationSchema: Yup.object().shape({
      fullnames: Yup.string().required().min(3).max(100),
      email: Yup.string().required().min(3).max(100),
      company: Yup.string().required().min(3).max(100),
      storagecity: Yup.string().required().min(3).max(50),
      storagecountry: Yup.string().required().min(3).max(50),
      warehousetype: Yup.string().required().min(3).max(50),
      weight: Yup.number().required().min(1).max(50000000),
      weightunit: Yup.string().required().min(1).max(100),
      producttype: Yup.string().required().min(3).max(50),
      pieces: Yup.number().required().min(1).max(50000000),
      datein: Yup.string().required().min(3).max(100),
      intime: Yup.string().required().min(3).max(100),
      dateout: Yup.string().required().min(3).max(100),
      outtime: Yup.string().required().min(3).max(100),
      trackno: Yup.string().required().min(3).max(100),
      quality: Yup.string().required().min(3).max(100),
      product: Yup.string().required().min(3).max(100),
      collectoraddress: Yup.string().min(3).max(100),
      collectortel: Yup.string().min(3).max(100),
      collectedby: Yup.string().min(3).max(100),
      idno: Yup.string().required().min(5).max(30),
      packaging: Yup.string().required().min(3).max(100),
      notes: Yup.string().required().min(10).max(100),
      observation: Yup.string().min(0).max(2000),
    }),
    onSubmit: (values, { resetForm }) => {
      try {
        axios
          .post("http://localhost:8080/api/storageshipment", values)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        alert(JSON.stringify(values, null, 2));
        resetForm({ values: "" });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="logistics-quotation-form">
      <div className="logistics-quotation-form-content">
        <form
          onSubmit={formik.handleSubmit}
          className="the-logistics-quotation-form"
        >
          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Your fullnames</label>
              <input
                type="text"
                placeholder="Your fullnames here..."
                name="fullnames"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullnames}
                required
              />
              {formik.touched.fullnames && formik.errors.fullnames ? (
                <div className="error">{formik.errors.fullnames}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Company</label>
              <input
                type="text"
                placeholder="company"
                name="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
                required
              />
              {formik.touched.company && formik.errors.company ? (
                <div className="error">{formik.errors.company}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Weight unit</label>
              <select
                type="text"
                name="weightunit"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weightunit}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option value="kg" label="Kilograms" />
                <option value="lb" label="Pounds" />
                <option value="g" label="Grams" />
                <option value="t" label="Tonnes" />
                <option value="l" label="Liters" />
                <option value="gal" label="Gallons" />
              </select>
              {formik.touched.weightunit && formik.errors.weightunit ? (
                <div className="error">{formik.errors.weightunit}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Weight</label>
              <input
                type="number"
                placeholder="The weight of the item..."
                name="weight"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
                required
              />
              {formik.touched.weight && formik.errors.weight ? (
                <div className="error">{formik.errors.weight}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Product Type</label>
              <select
                type="text"
                name="producttype"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.producttype}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option value="solid" label="Solid" defaultValue />
                <option value="liquid" label="Liquid" />
                <option value="gas" label="Gas" />
              </select>
              {formik.touched.producttype && formik.errors.producttype ? (
                <div className="error">{formik.errors.producttype}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Storage city</label>
              <input
                type="text"
                placeholder="What is your city..."
                name="storagecity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.storagecity}
                required
              />
              {formik.touched.storagecity && formik.errors.storagecity ? (
                <div className="error">{formik.errors.storagecity}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Storage country</label>
              <input
                type="text"
                placeholder="What is your country..."
                name="storagecountry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.storagecountry}
                required
              />
              {formik.touched.storagecountry && formik.errors.storagecountry ? (
                <div className="error">{formik.errors.storagecountry}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Pieces </label>
              <input
                type="number"
                placeholder="pieces"
                name="pieces"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pieces}
                required
              />
              {formik.touched.pieces && formik.errors.pieces ? (
                <div className="error">{formik.errors.pieces}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Date in</label>
              <input
                type="date"
                placeholder="Date in..."
                name="datein"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.datein}
                required
              />
              {formik.touched.datein && formik.errors.datein ? (
                <div className="error">{formik.errors.datein}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Time in</label>
              <input
                type="time"
                placeholder="Time in..."
                name="intime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.intime}
                required
              />
              {formik.touched.intime && formik.errors.intime ? (
                <div className="error">{formik.errors.intime}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label> Warehouse Type </label>
              <select
                type="text"
                name="warehousetype"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.warehousetype}
                required
              >
                <option value="" disabled label="Please select an option" />
                <option
                  value="distribution"
                  label="Distribution"
                  defaultValue
                />
                <option value="climatecontrolled" label="Climate controlled" />
                <option value="public" label="Public" />
                <option value="private" label="Private" />
                <option value="bonded" label="Bonded" />
              </select>
              {formik.touched.warehousetype && formik.errors.warehousetype ? (
                <div className="error">{formik.errors.warehousetype}</div>
              ) : null}
            </div>
          </div>

          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Date out</label>
              <input
                type="date"
                placeholder="Date in..."
                name="dateout"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateout}
                required
              />
              {formik.touched.dateout && formik.errors.dateout ? (
                <div className="error">{formik.errors.dateout}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Time out</label>
              <input
                type="time"
                placeholder="Time in..."
                name="outtime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.outtime}
                required
              />
              {formik.touched.outtime && formik.errors.outtime ? (
                <div className="error">{formik.errors.outtime}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Store track number</label>
              <input
                type="text"
                placeholder="Store truck number"
                name="trackno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.trackno}
                required
              />
              {formik.touched.trackno && formik.errors.trackno ? (
                <div className="error">{formik.errors.storetrackno}</div>
              ) : null}
            </div>
          </div>
          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Quality</label>
              <input
                type="text"
                placeholder="Quality eg 20% moist, etx"
                name="quality"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quality}
                required
              />
              {formik.touched.quality && formik.errors.quality ? (
                <div className="error">{formik.errors.quality}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Packaging</label>
              <input
                type="text"
                placeholder="Unit eg bags, heap etc"
                name="packaging"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.packaging}
                required
              />
              {formik.touched.packaging && formik.errors.packaging ? (
                <div className="error">{formik.errors.packaging}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>ID NO</label>
              <input
                type="text"
                placeholder="Time in..."
                name="idno"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.idno}
                required
              />
              {formik.touched.idno && formik.errors.idno ? (
                <div className="error">{formik.errors.idno}</div>
              ) : null}
            </div>
          </div>
          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Collected by</label>
              <input
                type="text"
                placeholder="Quality eg 20% moist, etx"
                name="collectedby"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.collectedby}
                required
              />
              {formik.touched.collectedby && formik.errors.collectedby ? (
                <div className="error">{formik.errors.collectedby}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Collector's Address</label>
              <input
                type="text"
                placeholder="Unit eg bags, heap etc"
                name="collectoraddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.collectoraddress}
              />
              {formik.touched.collectoraddress &&
              formik.errors.collectoraddress ? (
                <div className="error">{formik.errors.collectoraddress}</div>
              ) : null}
            </div>
            <div className="logistics-quotation-small-input-group">
              <label>Collector's Telephone</label>
              <input
                type="text"
                placeholder="Collectors phone number..."
                name="collectortel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.collectortel}
                required
              />
              {formik.touched.collectortel && formik.errors.collectortel ? (
                <div className="error">{formik.errors.collectortel}</div>
              ) : null}
            </div>
          </div>
          <div className="logistics-quotation-small-inputs">
            <div className="logistics-quotation-small-input-group">
              <label>Product</label>
              <input
                type="text"
                placeholder="Time in..."
                name="product"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.product}
                required
              />
              {formik.touched.product && formik.errors.product ? (
                <div className="error">{formik.errors.product}</div>
              ) : null}
            </div>
          </div>

          <div className="content-area-group">
            <div className="contact-textarea">
              <label>Description</label>
              <textarea
                type="text"
                name="notes"
                placeholder="Little notess eg weight, size, color, etc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.notes}
                required
              />
              {formik.touched.notes && formik.errors.notes ? (
                <div className="error">{formik.errors.notes}</div>
              ) : null}
            </div>
            <div className="contact-textarea">
              <label>Observation</label>
              <textarea
                type="text"
                name="observation"
                placeholder="Observations made..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.observation}
              />
              {formik.touched.observation && formik.errors.observation ? (
                <div className="error">{formik.errors.observation}</div>
              ) : null}
            </div>
          </div>

          <br />
          <button type="submit">
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default StorageEditFormsContent;

import "./App.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  TextField,
  Container,
  Typography,
  IconButton,
  Checkbox,
  FormControlLabel,
  // Grid,
} from "@mui/material";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import { Download } from "@mui/icons-material";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [familySignature, setFamilySignature] = useState(null);
  const [formType, setFormType] = useState("pensioner"); // Default: Pensioner

  const onSubmit = (data) => {
    setFormData(data);
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSignatureChange = (e) => {
    setSignature(URL.createObjectURL(e.target.files[0]));
  };

  const handleFamilySignatureChange = (e) => {
    setFamilySignature(URL.createObjectURL(e.target.files[0]));
  };

  const MyDocument = () => (
    <Document>
      <Page
        size={[300, 180]}
        style={{ padding: 10, border: "1px solid black" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          {/* SBI Logo */}
          <Image
            src="./images.jpeg"
            style={{ width: 30, height: 15, marginRight: 5 }}
          />

          <Text
            style={{
              fontSize: 8,
              fontWeight: "900",
              color: "#0D92F4",
              textAlign: "center",
            }}
          >
            State Bank of India
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 10,
            backgroundColor: "yellow",
            fontWeight: "bolder",
            marginBottom: 5,
          }}
        >
          {formType === "pensioner"
            ? "PENSIONER IDENTITY CARD"
            : "FAMILY PENSIONER IDENTITY CARD"}
        </Text>

        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}
        >
          {/* Left column */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <Text
                style={{ marginBottom: 3, fontSize: 6, fontWeight: "bold" }}
              >
                Name
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                PF / HRMS No.
              </Text>
              {formType === "pensioner" && (
                <>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>
                    Date of Birth
                  </Text>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>
                    Date of Retirement
                  </Text>
                </>
              )}
              {formType === "familyPensioner" && (
                <Text style={{ marginBottom: 3, fontSize: 6 }}>
                  Date of Death of Pensioner
                </Text>
              )}
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Pension A/C No.
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>Address</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>Phone No.</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Pension Paying Branch and Code
              </Text>
            </View>

            {/* Colon column */}
            <View style={{ marginRight: 7, alignItems: "center" }}>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              {formType === "pensioner" && (
                <>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
                </>
              )}
              {formType === "familyPensioner" && (
                <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              )}
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
            </View>

            {/* Values column */}
            <View>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pensionerName}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pfIndex}
              </Text>
              {formType === "pensioner" && (
                <>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>
                    {formData?.pensionerDob}
                  </Text>
                  <Text style={{ marginBottom: 3, fontSize: 6 }}>
                    {formData?.retirementDate}
                  </Text>
                </>
              )}
              {formType === "familyPensioner" && (
                <Text style={{ marginBottom: 3, fontSize: 6 }}>
                  {formData?.dateOfDeath}
                </Text>
              )}
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.accountNo}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.address}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.phoneNo}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.branchCode}
              </Text>
            </View>
          </View>

          {/* Right column */}
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {photo && (
              <Image
                src={photo}
                style={{ width: 40, height: 50, marginBottom: 5 }}
              />
            )}
            <Text style={{ fontSize: 8 }}>Signature:</Text>
            {formType === "pensioner" && signature && (
              <Image src={signature} style={{ width: 40, height: 20 }} />
            )}
            {formType === "familyPensioner" && familySignature && (
              <Image src={familySignature} style={{ width: 40, height: 20 }} />
            )}
          </View>
        </View>

        {/* Authority Signature */}
        <Text
          style={{
            marginTop: 10,
            fontSize: 6,
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          Branch Manager
        </Text>
      </Page>
    </Document>
  );

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", color: "#0D92F4" }}
      >
        State Bank of India
      </Typography>
      <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
        Family Pensioners Identity Card Form
      </Typography>

      {/* Form type selection */}
      <FormControlLabel
        control={
          <Checkbox
            checked={formType === "pensioner"}
            onChange={() => setFormType("pensioner")}
          />
        }
        label="Pensioner"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formType === "familyPensioner"}
            onChange={() => setFormType("familyPensioner")}
          />
        }
        label="Family Pensioner"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          {...register("pensionerName")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="PF / HRMS No."
          {...register("pfIndex")}
          fullWidth
          required
          margin="normal"
        />

        {formType === "pensioner" && (
          <>
            <TextField
              label="Date of Birth"
              {...register("pensionerDob")}
              type="date"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Date of Retirement"
              {...register("retirementDate")}
              type="date"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </>
        )}

        {formType === "familyPensioner" && (
          <TextField
            label="Date of Death of Pensioner"
            {...register("dateOfDeath")}
            type="date"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        )}

        <TextField
          label="Pension A/C No."
          {...register("accountNo")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Address"
          {...register("address")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Phone No."
          {...register("phoneNo")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Pension Paying Branch and Code"
          {...register("branchCode")}
          fullWidth
          required
          margin="normal"
        />

        {/* File inputs */}
        <label>Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          required
        />
        <br />
        <label>Signature:</label>
        <input
          type="file"
          accept="image/*"
          onChange={
            formType === "pensioner"
              ? handleSignatureChange
              : handleFamilySignatureChange
          }
          required
        />
        <br />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {formData && (
        <div style={{ marginTop: 20 }}>
          <PDFDownloadLink
            document={<MyDocument />}
            fileName="Pensioner_ID_Card.pdf"
          >
            {({ loading }) => (
              <IconButton
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <Download style={{ marginRight: 5 }} />
                {loading ? "Loading document..." : "Download PDF"}
              </IconButton>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </Container>
  );
};

export default App;

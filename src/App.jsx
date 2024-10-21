// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Container,
  Typography,
  IconButton,
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

  const onSubmit = (data) => {
    setFormData(data);
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSignatureChange = (e) => {
    setSignature(URL.createObjectURL(e.target.files[0]));
  };

  const MyDocument = () => (
    <Document>
      <Page
        size={[250, 153]}
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
            src="data:image/jpeg;base64,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KxlCus9WB1NbSUzKSJ0z2z6TmttcN4Nwvr3kLb4mSMdtyyiVQ/N3iv2Ob+34rqfy8X/pZ1wfN3iv2Ob+34p/Lxfs64Pm7xX7HN/b8U/l4v2dcM/N3iv2Ob+34p/Lxfs64dimzY4q897aHnva0DnUTzMUfKJukuC5kqh5BrJ44W+MyL6RxG5x1DqWvf1GPFWPUtPJXI6jw1tqaMcIRZ8zu2kd6eLmFgudlz3yeWO0jVaHEqJka8Zb5DYjPiVbNDSSvifM5zHjRsWkDWNa7HG5GOmPUysrOnifN3iv2Ob+34q/+Xi/bLrhIM32ROIU+KUU89LLHEx7i950bAGN416+Uha/K5FL0mIljaYmGwTVyInatyUggWQEGLIM2QYLURqGbIljRCI1DKJLICAgICAgWQEBBiyDNkCyAgIFkBAQEBAQEBAQE0CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/9k="
            style={{ width: 30, height: 15, marginRight: 5 }}
          />

          {/* Text */}
          <Text
            style={{
              fontSize: 10,
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
          PENSIONER IDENTITY CARD
        </Text>

        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            {/* Left side for labels */}
            <View style={{ marginRight: 10 }}>
              <Text
                style={{ marginBottom: 3, fontSize: 6, fontWeight: "bold" }}
              >
                Name
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                PF / HRMS No.
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>Blood Group</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Date of Birth
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Date of Retirement
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Pension A/C No.
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                Last Position Held
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>Phone No.</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>Address</Text>
            </View>

            {/* Middle side for colon */}
            <View style={{ marginRight: 7, alignItems: "center" }}>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>:</Text>
            </View>

            {/* Right side for values */}
            <View>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pensionerName}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pfIndex}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.BloodGroup}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pensionerDob}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.retirementDate}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.accountNo}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.pensionerHeldName}
              </Text>
              <Text style={{ marginBottom: 3, fontSize: 6 }}>
                {formData?.phoneNo}
              </Text>
              <Text
                style={{
                  marginBottom: 3,
                  fontSize: 6,
                  flexWrap: "wrap",
                  width: 150, // Adjust the width based on your layout
                }}
              >
                {formData?.address}
              </Text>
            </View>
          </View>

          {/* Right section with photo and signature */}
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
            {signature && (
              <Image src={signature} style={{ width: 40, height: 20 }} />
            )}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <Container
      style={{
        textAlign: "center",
        margin: "20px",
        marginLeft: "80px",
      }}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt="SBI Logo"
        style={{ width: "100px", height: "100px", marginRight: "10px" }}
      />
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "inline-block", textAlign: "left" }}
      >
        <TextField
          label="Name"
          {...register("pensionerName")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="PF / HRMS NO."
          {...register("pfIndex")}
          fullWidth
          required
          margin="normal"
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
          label="Pension A/C No."
          {...register("accountNo")}
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
          label="Last Position Held"
          {...register("pensionerHeldName")}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Blood Group"
          {...register("BloodGroup")}
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
        <label style={{ display: "block", margin: "10px 0" }}>Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          required
          style={{ marginBottom: "10px" }}
        />

        <label style={{ display: "block", margin: "10px 0" }}>Signature:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleSignatureChange}
          required
          style={{ marginBottom: "10px" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>

      {formData && (
        <div style={{ marginTop: "20px" }}>
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
                aria-label="download"
              >
                <Download style={{ marginRight: "5px" }} />
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

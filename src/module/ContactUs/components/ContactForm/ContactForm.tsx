import { COLORS } from "@muc/constant";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import TelegramIcon from "@mui/icons-material/Telegram";

type Inputs = {
  name: string;
  Email: string;
  Subject: string;
  Number: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Typography
        variant="body1"
        fontSize={"28px"}
        fontFamily={"Exo"}
        mb={"30px"}
        fontWeight={700}
        color={COLORS.Black}
      >
        Send Us A Message
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          {/* Name Field */}
          <TextField
            fullWidth
            required
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              maxLength: { value: 15, message: "Max length is 15 characters" },
              minLength: { value: 3, message: "Min length is 3 characters" },
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
                "&.Mui-focused fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
              },
            }}
          />
          {errors.name && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.name.message}
            </Typography>
          )}

          {/* Email Field */}
          <TextField
            fullWidth
            required
            placeholder="Email"
            {...register("Email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
                "&.Mui-focused fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
              },
            }}
          />
          {errors.Email && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.Email.message}
            </Typography>
          )}

          {/* Subject Field */}
          <TextField
            fullWidth
            required
            placeholder="Subject"
            {...register("Subject", {
              required: { value: true, message: "Subject is required" },
              maxLength: { value: 15, message: "Max length is 15 characters" },
              minLength: { value: 3, message: "Min length is 3 characters" },
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
                "&.Mui-focused fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
              },
            }}
          />
          {errors.Subject && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.Subject.message}
            </Typography>
          )}

          {/* Number Field */}
          <TextField
            fullWidth
            type="number"
            required
            placeholder="7 + 7 = ?"
            {...register("Number", {
              required: { value: true, message: "Answer is required" },
              validate: (value) =>
                value === "14" || "Incorrect answer. Try again.",
            })}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
                "&.Mui-focused fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
              },
              "& .MuiInputBase-input": {
                padding: "15px 10px",
                fontSize: "12px",
                borderRadius: "none",
              },
            }}
          />
          {errors.Number && (
            <Typography fontSize={"12px"} sx={{ color: "#d32f2f" }}>
              {errors.Number.message}
            </Typography>
          )}

          {/* Message Field */}
          <TextField
            rows={4}
            multiline
            fullWidth
            placeholder="Message"
            {...register("message")}
            sx={{
              color: COLORS.Black,
              fontFamily: "Exo",
              padding: 0,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: 0,
                },
                "&:hover fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
                "&.Mui-focused fieldset": {
                  border: `1px solid ${COLORS.Black}`,
                },
              },
              "& .MuiInputBase-input": {
                padding: "0px",
                fontSize: "12px",
                borderRadius: "none",
              },
            }}
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          sx={{
            bgcolor: COLORS.Brown,
            color: COLORS.White,
            padding: "8px 20px",
            fontSize: "13px",
            fontFamily: "Fira Sans",
            fontWeight: 700,
            mt: "15px",
            ":hover": {
              bgcolor: COLORS.Black,
            },
          }}
        >
          <TelegramIcon sx={{ fontSize: "20px" }} />
          Send message
        </Button>
      </form>
    </>
  );
};

export default ContactForm;

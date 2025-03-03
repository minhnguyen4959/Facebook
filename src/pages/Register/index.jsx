import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTimes } from 'react-icons/fa';
import {
  RegisterContainer,
  RegisterHeader,
  RegisterLogo,
  RegisterContent,
  RegisterForm,
  RegisterTitle,
  RegisterSubtitle,
  FormGroup,
  FormRow,
  FormInput,
  FormSelect,
  FormLabel,
  FormRadioGroup,
  FormRadio,
  FormRadioLabel,
  RegisterButton,
  LoginLink,
  RegisterFooter,
  RegisterFooterLink,
  CloseButton
} from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    gender: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trong thực tế, bạn sẽ gửi yêu cầu đăng ký đến server
    console.log('Đăng ký với:', formData);
    
    // Giả lập đăng ký thành công
    navigate('/');
  };

  // Tạo các tùy chọn cho ngày, tháng, năm
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: 'Tháng 1' },
    { value: 2, label: 'Tháng 2' },
    { value: 3, label: 'Tháng 3' },
    { value: 4, label: 'Tháng 4' },
    { value: 5, label: 'Tháng 5' },
    { value: 6, label: 'Tháng 6' },
    { value: 7, label: 'Tháng 7' },
    { value: 8, label: 'Tháng 8' },
    { value: 9, label: 'Tháng 9' },
    { value: 10, label: 'Tháng 10' },
    { value: 11, label: 'Tháng 11' },
    { value: 12, label: 'Tháng 12' }
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <RegisterContainer>
      <RegisterHeader>
        <RegisterLogo>
          <FaFacebook />
        </RegisterLogo>
        <LoginLink to="/login">Đăng nhập</LoginLink>
      </RegisterHeader>
      
      <RegisterContent>
        <RegisterForm onSubmit={handleSubmit}>
          <CloseButton as={Link} to="/login">
            <FaTimes />
          </CloseButton>
          
          <RegisterTitle>Đăng ký</RegisterTitle>
          <RegisterSubtitle>Nhanh chóng và dễ dàng.</RegisterSubtitle>
          
          <FormRow>
            <FormInput
              type="text"
              name="firstName"
              placeholder="Họ"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormInput
              type="text"
              name="lastName"
              placeholder="Tên"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormRow>
          
          <FormGroup>
            <FormInput
              type="text"
              name="email"
              placeholder="Số di động hoặc email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormInput
              type="password"
              name="password"
              placeholder="Mật khẩu mới"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Ngày sinh</FormLabel>
            <FormRow>
              <FormSelect
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
              >
                <option value="">Ngày</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </FormSelect>
              
              <FormSelect
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                <option value="">Tháng</option>
                {months.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </FormSelect>
              
              <FormSelect
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Năm</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </FormSelect>
            </FormRow>
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Giới tính</FormLabel>
            <FormRadioGroup>
              <FormRadio>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  required
                />
                <FormRadioLabel htmlFor="female">Nữ</FormRadioLabel>
              </FormRadio>
              
              <FormRadio>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                <FormRadioLabel htmlFor="male">Nam</FormRadioLabel>
              </FormRadio>
              
              <FormRadio>
                <input
                  type="radio"
                  name="gender"
                  value="custom"
                  id="custom"
                  checked={formData.gender === 'custom'}
                  onChange={handleChange}
                />
                <FormRadioLabel htmlFor="custom">Tùy chỉnh</FormRadioLabel>
              </FormRadio>
            </FormRadioGroup>
          </FormGroup>
          
          <p style={{ fontSize: '11px', color: '#777', margin: '16px 0' }}>
            Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="#" style={{ color: '#385898' }}>Tìm hiểu thêm</a>.
          </p>
          
          <p style={{ fontSize: '11px', color: '#777', margin: '16px 0' }}>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#" style={{ color: '#385898' }}>Điều khoản</a>, <a href="#" style={{ color: '#385898' }}>Chính sách quyền riêng tư</a> và <a href="#" style={{ color: '#385898' }}>Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
          </p>
          
          <RegisterButton type="submit">
            Đăng ký
          </RegisterButton>
        </RegisterForm>
      </RegisterContent>
      
      <RegisterFooter>
        <RegisterFooterLink>Tiếng Việt</RegisterFooterLink>
        <RegisterFooterLink>English (US)</RegisterFooterLink>
        <RegisterFooterLink>中文(简体)</RegisterFooterLink>
        <RegisterFooterLink>日本語</RegisterFooterLink>
        <RegisterFooterLink>한국어</RegisterFooterLink>
        <RegisterFooterLink>Français (France)</RegisterFooterLink>
        <RegisterFooterLink>ภาษาไทย</RegisterFooterLink>
        <RegisterFooterLink>Español</RegisterFooterLink>
        <RegisterFooterLink>Português (Brasil)</RegisterFooterLink>
        <RegisterFooterLink>Deutsch</RegisterFooterLink>
        <RegisterFooterLink>Italiano</RegisterFooterLink>
      </RegisterFooter>
    </RegisterContainer>
  );
};

export default Register; 